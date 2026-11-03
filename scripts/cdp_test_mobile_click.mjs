import { spawn } from "child_process";
import http from "http";

async function run() {
  const regRes = await fetch("https://api.prepspaces.com/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Samarth Tester",
      email: `mobile_test_${Date.now()}@example.com`,
      password: "Password123!",
    }),
  });
  const regData = await regRes.json();

  const chrome = spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--no-sandbox",
    "--disable-gpu",
    "--window-size=390,844",
    "https://prepspaces.com/",
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  const targets = await new Promise((resolve, reject) => {
    http.get("http://127.0.0.1:9222/json/list", (res) => {
      let d = "";
      res.on("data", (c) => (d += c));
      res.on("end", () => resolve(JSON.parse(d)));
    }).on("error", reject);
  });

  const page = targets.find((t) => t.type === "page") || targets[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    } else {
      if (msg.method === "Runtime.consoleAPICalled") {
        console.log(`[Browser Console ${msg.params.type}]`, ...msg.params.args.map((a) => a.value || a.description || ""));
      } else if (msg.method === "Runtime.exceptionThrown") {
        console.error(`[Browser Exception]`, msg.params.exceptionDetails);
      }
    }
  };

  await new Promise((r) => (ws.onopen = r));
  await send("Runtime.enable");
  await send("Page.enable");

  // Set localStorage and navigate to /dashboard
  await send("Runtime.evaluate", {
    expression: `
      localStorage.setItem("prepspaces_auth_token", ${JSON.stringify(regData.token)});
      localStorage.setItem("prepspaces_auth_user", ${JSON.stringify(JSON.stringify(regData.user))});
      window.location.href = "/dashboard";
    `,
  });

  await new Promise((r) => setTimeout(r, 4000));

  // On mobile, click the hamburger button to open sidebar!
  console.log("Opening mobile sidebar via hamburger button...");
  await send("Runtime.evaluate", {
    expression: `
      (function() {
        const menuBtn = document.querySelector('header button[aria-label="Open sidebar"]');
        if (menuBtn) {
          menuBtn.click();
          console.log("[Test] Clicked hamburger menu button");
        } else {
          console.log("[Test] No hamburger button found (screen might be wide)");
        }
      })()
    `,
  });

  await new Promise((r) => setTimeout(r, 1000));

  // Now inspect the logout button inside the open sidebar on mobile!
  const inspectMobile = await send("Runtime.evaluate", {
    expression: `
      (function() {
        const btn = document.querySelector('aside button[title="Log out"]');
        if (!btn) return { error: "Button not found in mobile aside" };
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const elemAtPoint = document.elementFromPoint(centerX, centerY);

        return {
          windowSize: { innerWidth: window.innerWidth, innerHeight: window.innerHeight },
          rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
          centerX,
          centerY,
          elemAtPointTag: elemAtPoint ? elemAtPoint.tagName : null,
          elemAtPointClass: elemAtPoint ? elemAtPoint.className : null,
          elemAtPointOuter: elemAtPoint ? elemAtPoint.outerHTML.slice(0, 150) : null,
          isButtonOrChild: btn === elemAtPoint || btn.contains(elemAtPoint)
        };
      })()
    `,
    returnByValue: true,
  });

  console.log("Mobile logout button inspection:", inspectMobile.result.value);

  const mobData = inspectMobile.result.value;
  if (mobData && mobData.centerX) {
    const x = Math.round(mobData.centerX);
    const y = Math.round(mobData.centerY);
    console.log(`Dispatching mobile mouse click at (${x}, ${y})...`);

    await send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      x,
      y,
      button: "left",
      clickCount: 1,
    });
    await send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      x,
      y,
      button: "left",
      clickCount: 1,
    });

    await new Promise((r) => setTimeout(r, 3000));

    const checkMobileClick = await send("Runtime.evaluate", {
      expression: `
        JSON.stringify({
          currentUrl: window.location.href,
          token: localStorage.getItem("prepspaces_auth_token"),
          user: localStorage.getItem("prepspaces_auth_user")
        })
      `,
    });

    console.log("Mobile click result state:", JSON.parse(checkMobileClick.result.value));
  }

  ws.close();
  chrome.kill();
}

run().catch(console.error);

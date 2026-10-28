export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 301 redirect all www.prepspaces.com requests to prepspaces.com, preserving pathname, query string, and protocol
  if (url.hostname === "www.prepspaces.com") {
    url.hostname = "prepspaces.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

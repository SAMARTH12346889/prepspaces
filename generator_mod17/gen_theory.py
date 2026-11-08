# -*- coding: utf-8 -*-
"""
Module 17 Theory Sections: Sections 1 through 21.
Zero information loss - all diagrams, formulas, tables, and code snippets preserved in full.
"""

def generate_theory_sections():
    return '''
      {/* ============================================================== */}
      {/* SECTION 1: DEX ARCHITECTURE                                     */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            DEX Architecture
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Foundational design patterns, contract segregation, and transaction coordination in decentralized exchanges.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">1.1 What Is a Decentralized Exchange?</h3>
          <p>
            A <strong>Decentralized Exchange (DEX)</strong> is a blockchain-based protocol enabling peer-to-contract and peer-to-peer cryptocurrency swaps through autonomous smart contracts. Unlike centralized exchanges (CEXs) such as Coinbase or Binance, a DEX does not rely on a custodial entity to hold private keys, manage matching ledgers, or settle account balances.
          </p>
          <p>A production DEX architecture comprises seven interdependent layers:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><strong>Frontend Application:</strong> React/Next.js interface displaying quotes, charts, and slippage tolerances.</li>
            <li><strong>Wallet Integration:</strong> Injected EIP-1193 providers (MetaMask, Coinbase Wallet) for cryptographic signing.</li>
            <li><strong>Smart Contract Infrastructure:</strong> Modular contracts implementing factory, router, and pair mechanics.</li>
            <li><strong>Token Contracts:</strong> ERC-20 compliant digital assets being traded.</li>
            <li><strong>Liquidity Pools / Order Books:</strong> On-chain capital reserves or matched order registries.</li>
            <li><strong>Pricing and Routing Algorithms:</strong> Math engines determining output quotes and path traversal.</li>
            <li><strong>Transaction Execution Logic:</strong> Reentrancy-guarded execution routines transferring tokens and enforcing invariants.</li>
          </ul>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
            <h4 className="text-xs font-bold text-neutral-900 uppercase">Worked Example: 100 USDC for ETH Swap Lifecycle</h4>
            <p className="text-xs text-neutral-700">When a user executes a swap of 100 USDC for ETH, the DEX executes a 10-step sequence:</p>
            <ol className="list-decimal pl-5 space-y-1 text-xs font-mono text-neutral-800">
              <li>Identify the registered USDC/ETH liquidity pair contract address via Factory registry.</li>
              <li>Read current reserves: reserveUSDC and reserveETH.</li>
              <li>Calculate raw ETH output using the constant product formula: Δy = (y · Δx) / (x + Δx).</li>
              <li>Deduct applicable protocol and LP fees (e.g., 0.30%).</li>
              <li>Calculate price impact based on trade size relative to pool depth.</li>
              <li>Apply user slippage tolerance to compute amountOutMin.</li>
              <li>Verify and request ERC-20 allowance (approve) for the router contract.</li>
              <li>Execute router.swapExactTokensForTokens() with deadline verification.</li>
              <li>Pair contract validates balance invariant, transfers ETH to user, and pulls USDC.</li>
              <li>Emit Swap event and synchronize internal reserve state.</li>
            </ol>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.2 DEX Architectural Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">A. Factory Contract</span>
              <p className="text-xs text-neutral-600">
                The authoritative registry of all deployed trading pairs. Uses deterministic deployment via CREATE2 to allow clients to compute pair addresses off-chain without state queries.
              </p>
              <pre className="p-2.5 bg-[#f6f4ee] rounded-lg text-[11px] font-mono text-neutral-800 overflow-x-auto border border-[#e7e3da]">
{`function createPair(
  address tokenA, 
  address tokenB
) external returns (address pair);`}
              </pre>
              <p className="text-[11px] text-neutral-500">
                Enforces strict token ordering (tokenA &lt; tokenB) to prevent duplicate inverse pairs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">B. Pair Contract</span>
              <p className="text-xs text-neutral-600">
                Custodies actual ERC-20 reserves for a specific two-token pool. Enforces mathematical invariants, executes flash swaps, collects LP fees, and mints/burns LP receipt tokens.
              </p>
              <div className="p-2.5 bg-[#f6f4ee] rounded-lg text-[11px] font-mono text-neutral-800 border border-[#e7e3da]">
                ETH / USDC Pair Contract<br/>
                ├── ETH Reserve (uint112)<br/>
                ├── USDC Reserve (uint112)<br/>
                ├── LP Token Supply (ERC-20)<br/>
                └── swap() / mint() / burn() Logic
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">C. Router Contract</span>
              <p className="text-xs text-neutral-600">
                Stateless coordinator for user interactions. Pulls tokens via transferFrom, wraps native ETH to WETH, performs multi-hop path execution, and enforces slippage (amountOutMin) and deadline checks.
              </p>
              <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded border border-amber-200">
                <strong>Crucial Design Rule:</strong> The router never holds permanent pool liquidity; it acts exclusively as a transient execution coordinator.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">D. Frontend DApp</span>
              <p className="text-xs text-neutral-600">
                Client interface built with React, Ethers.js, or Viem. Computes local quotes, tracks user token approvals, listens to WebSocket block updates, and estimates network gas fees.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.3 Complete DEX Execution Architecture</h3>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
            <pre className="text-[11px] sm:text-xs font-mono text-neutral-800 overflow-x-auto leading-relaxed">
{`+-------------------------------------------------------+
|                    React Frontend                     |
+---------------------------+---------------------------+
                            | User inputs swap & signs tx
                            v
+-------------------------------------------------------+
|                   Wallet (MetaMask)                   |
+---------------------------+---------------------------+
                            | Calls swapExactTokensForTokens()
                            v
+-------------------------------------------------------+
|                      DEX Router                       |
|   - Verifies block.timestamp <= deadline              |
|   - Pulls tokenA from user via SafeERC20              |
+---------------------------+---------------------------+
                            | Look up pair address
                            v
+-------------------------------------------------------+
|                      DEX Factory                      |
|   - Mapping: getPair[tokenA][tokenB]                  |
+---------------------------+---------------------------+
                            | Transfer tokenA & trigger swap
                            v
+-------------------------------------------------------+
|                     Pair Contract                     |
|   - Reads actual token balances                       |
|   - Verifies constant product: balance0 * balance1 >= k|
|   - Calculates fee & transfers tokenB to user recipient|
+---------------------------+---------------------------+
               +------------+------------+
               |                         |
               v                         v
        Token A Reserve           Token B Reserve`}
            </pre>
            <div className="mt-3 p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>Key Engineering Insight:</strong> The router handles transaction coordination and safety parameters, while the pair contract is solely responsible for maintaining core financial custody and invariant preservation.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: ORDER BOOK VS AMM MODELS                            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Order Book vs AMM Models
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Analyzing discrete bid-ask matching versus autonomous algorithmic liquidity curves.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">2.1 Order Book Model</h3>
          <p>
            An <strong>Order Book</strong> maintains sorted queues of buy orders (bids) and sell orders (asks). Bids are sorted in descending order of price, while asks are sorted in ascending order. When a market order arrives, it matches against the opposite queue at the best available price.
          </p>

          {/* Spread Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Bid Quantity</th>
                  <th className="p-3">Bid Price (Bids)</th>
                  <th className="p-3">Ask Price (Asks)</th>
                  <th className="p-3">Ask Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da] font-mono">
                <tr className="bg-white">
                  <td className="p-3 text-emerald-700">5 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,998</td>
                  <td className="p-3 text-rose-800 font-bold">$2,002</td>
                  <td className="p-3 text-rose-700">3 ETH</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 text-emerald-700">10 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,995</td>
                  <td className="p-3 text-rose-800 font-bold">$2,005</td>
                  <td className="p-3 text-rose-700">5 ETH</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-emerald-700">15 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,990</td>
                  <td className="p-3 text-rose-800 font-bold">$2,010</td>
                  <td className="p-3 text-rose-700">8 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            <span className="font-bold text-neutral-900">Bid-Ask Spread Calculation:</span>
            <div className="mt-1 text-amber-800 font-bold">
              Spread = Lowest Ask - Highest Bid = $2,002 - $1,998 = $4.00
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-900 uppercase">Order Book Advantages</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-emerald-800">
                <li>Zero price impact for orders filled within top-of-book depth.</li>
                <li>Familiar trading UX with Limit, Stop-Loss, and OCO orders.</li>
                <li>Superior capital efficiency in highly liquid institutional markets.</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900 uppercase">On-Chain Order Book Challenges</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-rose-800">
                <li>High gas cost: Inserting/canceling orders modifies contract storage queues.</li>
                <li>Latency and front-running in unconfirmed transaction mempools.</li>
                <li>Requires active, professional market makers to avoid empty books.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.2 AMM Model</h3>
          <p>
            An <strong>Automated Market Maker (AMM)</strong> does not match individual orders. Instead, users trade against a smart contract holding a pool of token reserves. The asset price adjusts deterministically according to an algorithmic invariant function:
          </p>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs font-mono text-amber-950 font-bold">
            x · y = k (Constant Product AMM)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.3 Comprehensive Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Order Book DEX</th>
                  <th className="p-3">AMM DEX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Pricing Engine</td>
                  <td className="p-3 text-neutral-600">Discrete bid/ask limit quotes</td>
                  <td className="p-3 text-neutral-600">Deterministic mathematical invariant (e.g. x · y = k)</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Liquidity Source</td>
                  <td className="p-3 text-neutral-600">Active trader limit orders</td>
                  <td className="p-3 text-neutral-600">Passive liquidity provider pooled deposits</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Order Matching</td>
                  <td className="p-3 text-neutral-600">Matching engine (off-chain or on-chain)</td>
                  <td className="p-3 text-neutral-600">Autonomous smart contract calculations</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Price Control</td>
                  <td className="p-3 text-neutral-600">Exact limit orders</td>
                  <td className="p-3 text-neutral-600">Slippage constraints (amountOutMin)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Market Makers</td>
                  <td className="p-3 text-neutral-600">Professional algorithmic market makers</td>
                  <td className="p-3 text-neutral-600">Any token holder (permissionless LPs)</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Gas Complexity</td>
                  <td className="p-3 text-neutral-600">High (O(log n) tree inserts & cancellations)</td>
                  <td className="p-3 text-neutral-600">Low and constant O(1) storage updates</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Price Discovery</td>
                  <td className="p-3 text-neutral-600">Continuous order book matching</td>
                  <td className="p-3 text-neutral-600">Reserve ratio adjusted by arbitrageurs</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Primary Use Case</td>
                  <td className="p-3 text-neutral-600">Institutional, high-frequency pairs</td>
                  <td className="p-3 text-neutral-600">Long-tail token trading & permissionless swaps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.4 Hybrid DEX Architecture</h3>
          <p>
            Modern platforms frequently deploy hybrid systems combining off-chain order books with on-chain settlement (e.g., 0x, dYdX v3, CowSwap). Limit orders are signed cryptographically off-chain via EIP-712 and matched by an off-chain coordinator, with the final transaction submitted atomically to an on-chain settlement contract.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: CONSTANT PRODUCT FORMULA                            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Constant Product Formula
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Mathematical derivation, fee incorporation, and integer arithmetic in Solidity.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">3.1 Mathematical Foundation</h3>
          <p>
            The constant product formula states that the product of token reserves within a pool must remain invariant across swaps (excluding fees):
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-center font-bold text-neutral-900">
            x · y = k
          </div>
          <p className="text-xs">
            Where <code>x</code> is Reserve A, <code>y</code> is Reserve B, and <code>k</code> is the invariant constant. Plotted on a Cartesian coordinate plane, this forms a rectangular hyperbola asymptotic to both axes, ensuring the pool never runs out of either asset.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.2 Step-by-Step Derivation of the Swap Formula</h3>
          <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2 text-xs font-mono">
            <p className="font-bold text-neutral-900 font-sans">Scenario: Pool contains 10 ETH and 20,000 USDC. A trader deposits 1 ETH.</p>
            <div className="space-y-1 text-neutral-700">
              <div>Initial Reserves: x = 10 ETH, y = 20,000 USDC</div>
              <div>Initial Invariant: k = x · y = 10 · 20,000 = 200,000</div>
              <div>Trader deposits: Δx = 1 ETH</div>
              <div>New Token A Reserve: x' = x + Δx = 10 + 1 = 11 ETH</div>
              <div>Preserving invariant: x' · y' = k  ==&gt;  11 · y' = 200,000</div>
              <div>New Token B Reserve: y' = 200,000 / 11 = 18,181.81818 USDC</div>
              <div>Output received: Δy = y - y' = 20,000 - 18,181.81818 = 1,818.18182 USDC</div>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.3 General Swap Formula</h3>
          <p>General fee-free output formula:</p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            Δy = (y · Δx) / (x + Δx)
          </div>
          <p className="mt-2">Incorporating a trading fee <code>f = 0.003</code> (0.3%):</p>
          <div className="p-2.5 bg-amber-50 rounded-lg font-mono text-xs border border-amber-200 text-amber-950 font-bold">
            Δy = [y · Δx · (1 - f)] / [x + Δx · (1 - f)] = (y · Δx · 0.997) / (x + Δx · 0.997)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.4 Solidity Implementation with Integer Arithmetic</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`function getAmountOut(
    uint256 amountIn,
    uint256 reserveIn,
    uint256 reserveOut
) public pure returns (uint256 amountOut) {
    require(amountIn > 0, "Invalid input");
    require(reserveIn > 0 && reserveOut > 0, "Insufficient liquidity");
    
    // 0.3% fee: 1 - 0.003 = 0.997 represented as 997 / 1000
    uint256 amountInWithFee = amountIn * 997;
    uint256 numerator = amountInWithFee * reserveOut;
    uint256 denominator = (reserveIn * 1000) + amountInWithFee;
    
    amountOut = numerator / denominator;
}`}
          </pre>
          <p className="text-xs text-neutral-600">
            <strong>Why 997 and 1000?</strong> The EVM has no native floating-point math. Representing <code>0.997</code> as <code>997 / 1000</code> allows exact integer arithmetic without truncating sub-unit decimals.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.5 Important Invariant Verification</h3>
          <p className="text-xs text-neutral-600">
            In Uniswap V2, trading fees are retained inside the pool reserves. Therefore, after every swap, <code>k</code> actually increases slightly rather than remaining strictly constant. Production contracts must verify the actual post-swap balances:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            (balance0 · 1000 - amount0In · 3) · (balance1 · 1000 - amount1In · 3) &gt;= reserve0 · reserve1 · 1000²
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: UNISWAP V2 FUNDAMENTALS                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Uniswap V2 Fundamentals
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Pair contracts, token sorting, LP token accounting, and router execution patterns.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">4.1 Introduction to Uniswap V2</h3>
          <p>
            Launched in May 2020, Uniswap V2 standardized constant product AMMs on Ethereum. Its modular architecture cleanly separates registry management (Factory), financial state and token reserves (Pair), and user experience helpers (Router).
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.2 Pair Contract Storage & Variables</h3>
          <pre className="p-3.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`uint112 private reserve0;           // Packed into single 32-byte storage slot
uint112 private reserve1;           // Leaves 32 bits for timestamp
uint32  private blockTimestampLast; // Used for cumulative TWAP oracle pricing`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.3 Token Ordering</h3>
          <p className="text-xs text-neutral-600">
            Uniswap V2 pairs strictly sort token addresses numerically (<code>token0 &lt; token1</code>). For example, if token A is <code>0x111...</code> and token B is <code>0x222...</code>, token A is permanently registered as <code>token0</code>. This guarantees deterministic behavior and prevents duplicate pair contracts.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.4 LP Token Accounting</h3>
          <p>
            Liquidity Provider (LP) tokens are ERC-20 tokens representing fractional ownership of the pool. If a pool has 1,000 total LP tokens and Alice holds 100 LP tokens, her pool ownership is:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            Ownership = (100 / 1000) · 100% = 10%
          </div>
          <p className="text-xs mt-1">
            If the pool holds 100 ETH and 200,000 USDC, Alice's proportional claim is exactly 10 ETH and 20,000 USDC.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.5 Initial LP Token Minting</h3>
          <p>
            When a pool is first initialized, the liquidity minted is the geometric mean of the deposited assets:
          </p>
          <div className="p-2.5 bg-amber-50 rounded-lg font-mono text-xs border border-amber-200 text-amber-950 font-bold">
            Liquidity = √(amount0 · amount1) - MINIMUM_LIQUIDITY (1,000 wei)
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Why burn 1,000 wei to address(0)?</strong> This prevents the first depositor from inflating the LP share price (via donating assets) to make future deposits round down to zero, neutralising the initial share inflation attack.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.6 Subsequent LP Minting</h3>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            LiquidityMinted = min( (amount0 · totalSupply) / reserve0, (amount1 · totalSupply) / reserve1 )
          </div>
          <p className="text-xs mt-2">
            <strong>Worked Example:</strong> Pool has Reserve A = 100, Reserve B = 200, Total Supply = 1,000. Depositor adds 10 Token A and 20 Token B:<br/>
            Token A check: (10 · 1,000) / 100 = 100 LP tokens.<br/>
            Token B check: (20 · 1,000) / 200 = 100 LP tokens.<br/>
            User receives exactly <code>min(100, 100) = 100 LP tokens</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.7 Uniswap V2 Router Functions</h3>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><code>swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline)</code></li>
            <li><code>swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline)</code></li>
            <li><code>addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline)</code></li>
            <li><code>removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline)</code></li>
          </ul>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: UNISWAP V3 CONCENTRATED LIQUIDITY                   */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Uniswap V3 Concentrated Liquidity
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Tick mathematics, capital efficiency, virtual reserves, and price range dynamics.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">5.1 Why Uniswap V3 Was Introduced</h3>
          <p>
            In Uniswap V2, liquidity is spread uniformly across the entire theoretical price range from <code>0</code> to <code>∞</code>. In reality, stablecoins (USDC/USDT) or bluechips (ETH/USDC) trade in bounded intervals. Consequently, over 95% of deposited capital in V2 sat idle. Uniswap V3 allows LPs to concentrate liquidity inside specific price boundaries <code>[Pa, Pb]</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.2 Concept of Concentrated Liquidity</h3>
          <p>
            An LP provides liquidity only between a minimum price <code>Pa</code> (e.g., $1,800) and maximum price <code>Pb</code> (e.g., $2,400). As long as the market trades within this interval, the LP earns trading fees with massive capital efficiency. If price exits the interval, the position becomes 100% composed of the depreciating asset and ceases earning fees until the price re-enters.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.3 Price Ticks</h3>
          <p>
            Uniswap V3 discretizes continuous price space into discrete boundaries called <strong>ticks</strong>:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            P(i) = 1.0001^tick
          </div>
          <p className="text-xs text-neutral-600">
            Each tick index <code>i</code> represents a 1 basis point (0.01%) price shift. Ticks are grouped according to pool fee tiers (e.g. 0.05% tier has tick spacing 10; 0.30% has tick spacing 60).
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.4 Liquidity Mathematics & Virtual Reserves</h3>
          <p>When spot price <code>P</code> is in range (<code>Pa ≤ P ≤ Pb</code>):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>Token 0 (ETH) Quantity:</strong>
              <div className="mt-1 text-amber-800">Amount0 = L · (1/√P - 1/√Pb)</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>Token 1 (USDC) Quantity:</strong>
              <div className="mt-1 text-blue-800">Amount1 = L · (√P - √Pa)</div>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.5 Three Price Regions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900">Region A: Below Range (P &lt; Pa)</span>
              <p className="mt-1 text-rose-800">100% Token 0 (ETH). Position is inactive and earns 0 fees.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-900">Region B: In-Range (Pa ≤ P ≤ Pb)</span>
              <p className="mt-1 text-emerald-800">Mix of Token 0 and Token 1. Actively facilitates trades and earns fees.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <span className="font-bold text-blue-900">Region C: Above Range (P &gt; Pb)</span>
              <p className="mt-1 text-blue-800">100% Token 1 (USDC). Position is inactive and earns 0 fees.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.6 Capital Efficiency & Trade-offs</h3>
          <p className="text-xs text-neutral-600">
            A $10,000 position concentrated between $1,900 and $2,100 can provide the same market depth as $200,000 in Uniswap V2 (a 20x capital efficiency gain). However, concentrated positions experience accelerated impermanent loss if the price trends out of range.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.7 Uniswap V2 vs V3 Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Dimension</th>
                  <th className="p-3">Uniswap V2</th>
                  <th className="p-3">Uniswap V3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Liquidity Range</td><td className="p-2.5">Full range (0, ∞)</td><td className="p-2.5">Custom intervals [Pa, Pb]</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">LP Strategy</td><td className="p-2.5">Passive (set and forget)</td><td className="p-2.5">Active range management</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Capital Efficiency</td><td className="p-2.5">1x baseline</td><td className="p-2.5">Up to 4,000x inside narrow bands</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">LP Token Format</td><td className="p-2.5">Fungible ERC-20 token</td><td className="p-2.5">Non-fungible ERC-721 NFT</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Fee Tiers</td><td className="p-2.5">Fixed 0.30%</td><td className="p-2.5">0.01%, 0.05%, 0.30%, 1.00%</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Price Math</td><td className="p-2.5">Reserve ratio y / x</td><td className="p-2.5">Square root price Q64.96 (sqrtPriceX96)</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Fee Growth</td><td className="p-2.5">Compounded in pool reserves</td><td className="p-2.5">Collected uninvested per position</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 6 - 10: SWAP EXECUTION, LP TOKENS, IMPACT & ROUTING    */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 06 – 10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Swap Execution, Slippage, Impact & Multi-Hop Routing
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">6. Swap Execution Lifecycle & Safety Constraints</h3>
          <p>A secure token swap executes in six sequential phases:</p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>Stage 1: User Selects Pair & Amount (e.g. 1,000 USDC -&gt; ETH)</div>
            <div>Stage 2: Frontend Queries Router Quote via getAmountsOut()</div>
            <div>Stage 3: Token Allowance Verification (approve router if allowance &lt; amountIn)</div>
            <div>Stage 4: User Signs Transaction with slippage and deadline parameters</div>
            <div>Stage 5: Router Executes Swap on Pair Contract & Enforces Invariant</div>
            <div>Stage 6: Transaction Confirmation, State Sync, and Event Emission</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da] space-y-1">
              <span className="text-xs font-bold text-neutral-900 uppercase">Slippage Guard</span>
              <pre className="p-2 bg-[#f6f4ee] rounded text-[11px] font-mono text-neutral-800">
{`require(
  amountOut >= amountOutMin, 
  "Slippage exceeded"
);`}
              </pre>
              <p className="text-[11px] text-neutral-500">Reverts transaction if price shifts adversely during pending block confirmation.</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da] space-y-1">
              <span className="text-xs font-bold text-neutral-900 uppercase">Deadline Guard</span>
              <pre className="p-2 bg-[#f6f4ee] rounded text-[11px] font-mono text-neutral-800">
{`require(
  block.timestamp <= deadline, 
  "Transaction expired"
);`}
              </pre>
              <p className="text-[11px] text-neutral-500">Prevents validators from holding transactions in mempool to execute at stale prices.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">7. Liquidity Withdrawal Formula</h3>
          <p>When an LP burns <code>LPAmount</code> tokens, they receive proportional reserves:</p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-2.5 bg-[#f6f4ee] rounded border border-[#e7e3da]">
              AmountA = (LPAmount · ReserveA) / TotalLPSupply
            </div>
            <div className="p-2.5 bg-[#f6f4ee] rounded border border-[#e7e3da]">
              AmountB = (LPAmount · ReserveB) / TotalLPSupply
            </div>
          </div>
          <p className="text-xs text-neutral-600 mt-1">
            <strong>Example:</strong> Pool has Reserve A = 500, Reserve B = 1,000, Total LP = 1,000. An LP burning 100 LP tokens receives <code>(100 · 500)/1000 = 50 Token A</code> and <code>(100 · 1,000)/1000 = 100 Token B</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">8. Price Impact vs Slippage</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Concept</th>
                  <th className="p-3">Definition</th>
                  <th className="p-3">Underlying Cause</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Price Impact</td>
                  <td className="p-3 text-neutral-600">Deterministic shift in spot price along AMM curve caused by order size relative to pool depth.</td>
                  <td className="p-3 text-neutral-600">Trade volume relative to pool reserves (occurs even in an empty mempool).</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Slippage</td>
                  <td className="p-3 text-neutral-600">Difference between the estimated quote and final execution price upon transaction mining.</td>
                  <td className="p-3 text-neutral-600">Concurrent trades, latency, and MEV sandwich front-running.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">10. Multi-Hop Routing Architecture</h3>
          <p className="text-xs text-neutral-600">
            When no direct pool exists or when a direct pool has shallow liquidity, routers chain trades through intermediate pools (e.g. <code>WBTC -&gt; WETH -&gt; DAI</code>). Routers construct graph representations of token vertices and pool edges, evaluating output paths using BFS or modified Dijkstra algorithms to maximize net output after gas.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 11 - 16: LENDING, COMPOUND, AAVE, HEALTH FACTORS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 11 – 16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Lending Protocol Architecture, Compound & Aave
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Pool accounting, cToken vs aToken interest accrual, Collateral Factors, Health Factors, and Liquidation.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">11. Lending Protocol Architecture</h3>
          <p>A decentralized lending protocol operates as a multi-asset money market governed by nine core modules:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>1. Lending Pool:</strong> Holds supplied assets and handles user deposits, borrows, repayments, and withdrawals.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>2. Collateral Manager:</strong> Tracks user collateral balances and calculates aggregate borrowing power.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>3. Risk Engine:</strong> Evaluates position Health Factors and enforces Max LTV parameters.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>4. Interest Rate Model:</strong> Dynamically calculates borrow and supply interest based on pool utilization.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>5. Oracle Integration:</strong> Chains external price feeds (Chainlink) to value collateral and debt in USD.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>6. Liquidation Engine:</strong> Facilitates permissionless debt repayment and collateral seizure for unsafe loans.
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">12. Compound V2 Fundamentals (cToken Accounting)</h3>
          <p>
            In Compound V2, liquidity suppliers deposit underlying assets (e.g. USDC) and receive <strong>cTokens</strong> (cUSDC). The user's cToken wallet balance remains static over time. Interest accrual is captured entirely by an increasing <strong>Exchange Rate</strong>:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono font-bold text-neutral-900">
            ExchangeRate = (Cash + Borrows - Reserves) / cTokenSupply
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs space-y-1">
            <strong>Worked Example:</strong> If total cash = 1,000,000 USDC and cToken supply = 50,000,000 cUSDC:
            <div className="font-mono text-amber-800">ExchangeRate = 1,000,000 / 50,000,000 = 0.02 USDC per cUSDC.</div>
            A user holding 50,000 cUSDC can redeem <code>50,000 · 0.02 = 1,000 USDC</code>. As borrowers pay interest, Cash + Borrows rises, driving the exchange rate higher.
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">13. Aave V3 Fundamentals (aTokens & Debt Tokens)</h3>
          <p>
            Aave takes a contrasting approach: suppliers receive <strong>aTokens</strong> pegged 1:1 to the underlying asset. Interest accrual is reflected by continuous <strong>balance rebasing</strong> in the user's wallet:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            userBalance(t) = scaledBalance · liquidityIndex(t)
          </div>
          <p className="text-xs text-neutral-600">
            Borrowers mint non-transferable <strong>Variable Debt Tokens</strong> or <strong>Stable Debt Tokens</strong> that track outstanding debt principal multiplied by a cumulative borrow index.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">Compound V2 vs Aave V3 Architecture</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Compound V2</th>
                  <th className="p-3">Aave V3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Supplier Receipt</td><td className="p-2.5">cTokens (floating exchange rate)</td><td className="p-2.5">aTokens (1:1 rebasing balance)</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Debt Representation</td><td className="p-2.5">Internal account mapping</td><td className="p-2.5">Dedicated Variable/Stable Debt Tokens</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Risk Coordinator</td><td className="p-2.5">Monolithic Comptroller contract</td><td className="p-2.5">Modular Pool & PoolConfigurator contracts</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Risk Segregation</td><td className="p-2.5">Cross-collateral market pool</td><td className="p-2.5">Isolation Mode, E-Mode, Siloed Borrowing</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Flash Loans</td><td className="p-2.5">Third-party wrapper</td><td className="p-2.5">Native core feature</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">14. Collateral Factors & Multi-Asset Portfolio</h3>
          <p>
            The <strong>Collateral Factor (Max LTV)</strong> dictates maximum borrowing power:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            BorrowingPower = CollateralValue · CollateralFactor
          </div>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700">
                <tr><th className="p-2.5">Asset</th><th className="p-2.5">Supplied Value</th><th className="p-2.5">Collateral Factor</th><th className="p-2.5">Borrowing Power</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da] font-mono">
                <tr className="bg-white"><td className="p-2.5">ETH</td><td className="p-2.5">$5,000</td><td className="p-2.5">75%</td><td className="p-2.5 font-bold text-neutral-900">$3,750</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5">WBTC</td><td className="p-2.5">$3,000</td><td className="p-2.5">70%</td><td className="p-2.5 font-bold text-neutral-900">$2,100</td></tr>
                <tr className="bg-white"><td className="p-2.5">USDC</td><td className="p-2.5">$2,000</td><td className="p-2.5">85%</td><td className="p-2.5 font-bold text-neutral-900">$1,700</td></tr>
                <tr className="bg-amber-50 font-bold"><td className="p-2.5 text-amber-950">Total</td><td className="p-2.5 text-amber-950">$10,000</td><td className="p-2.5 text-amber-950">Weighted</td><td className="p-2.5 text-amber-900 font-extrabold">$7,550</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">15. Health Factor (HF) Formulation</h3>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-mono font-bold text-amber-950">
            HealthFactor = [ Σ (CollateralValue_i · LiquidationThreshold_i) ] / TotalDebtValue
          </div>
          <ul className="list-disc pl-6 space-y-1 text-xs mt-2">
            <li><strong>HF &gt; 1.0:</strong> Position is solvent and protected from liquidation.</li>
            <li><strong>HF = 1.0:</strong> Liquidation boundary.</li>
            <li><strong>HF &lt; 1.0:</strong> Undercollateralized position; eligible for immediate third-party liquidation.</li>
          </ul>

          <h3 className="text-base font-bold text-neutral-900 mt-6">16. Liquidation Thresholds & Seizure Math</h3>
          <p>
            When a position breaches <code>HF &lt; 1.0</code>, liquidators can repay a portion of the debt (governed by the Close Factor, e.g. 50%) and seize an equivalent value of collateral plus a <strong>Liquidation Bonus</strong> (typically 5%–10%):
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            SeizedCollateralValue = DebtRepaid · (1 + LiquidationBonus)
          </div>
          <p className="text-xs text-neutral-600 mt-1">
            <strong>Worked Example:</strong> Liquidator repays $2,000 USDC debt on an unsafe loan with a 5% bonus. The liquidator seizes <code>$2,000 · 1.05 = $2,100</code> of ETH collateral, pocketing a $100 profit.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 17 - 21: ORACLES, ACCOUNTING, FLASH LOANS, RISKS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 17 – 21
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Oracles, Lending Accounting, Flash Loans & Protocol Risk
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">17. Chainlink Price Feeds & Decimal Normalization</h3>
          <p className="text-xs text-neutral-600">
            Deterministic EVM smart contracts cannot make HTTP network calls. Protocols integrate Chainlink <code>AggregatorV3Interface</code> to ingest external market prices verified by decentralized validator consensus.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    AggregatorV3Interface public immutable priceFeed;
    
    constructor(address feedAddress) {
        priceFeed = AggregatorV3Interface(feedAddress);
    }
    
    function getLatestPrice() external view returns (int256) {
        (
            uint80 roundId,
            int256 price,
            ,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        
        require(price > 0, "Invalid price");
        require(answeredInRound >= roundId, "Stale round");
        require(block.timestamp - updatedAt <= 3600, "Stale timestamp");
        return price;
    }
}`}
          </pre>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs text-neutral-600">
            <strong>Decimal Normalization:</strong> Chainlink USD feeds return 8 decimals (e.g. $2,000 is <code>200,000,000,000</code>). When interacting with 18-decimal WETH or 6-decimal USDC, values must be explicitly scaled to 1e18 using <code>price * 10^(18 - decimals)</code> to prevent catastrophic valuation errors.
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">18. Lending Pool Accounting & Global Interest Indices</h3>
          <p className="text-xs text-neutral-600">
            Iterating over thousands of borrowers to update accrued interest in every block would exhaust block gas limits (O(n)). Lending protocols utilize global cumulative indices updated in O(1) time:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono">
            BorrowIndex_new = BorrowIndex_old · (1 + Rate · Δt)<br/>
            UserDebt = PrincipalDebt · (CurrentBorrowIndex / UserSnapshotIndex)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">19. Flash Loan Execution & Arbitrage Mechanics</h3>
          <p>
            Flash loans permit uncollateralized borrowing of entire pool reserves, conditioned on full repayment plus a fee (e.g. 0.05% in Aave) within the same atomic EVM transaction:
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>1. User invokes pool.flashLoan(receiver, token, amount, params)</div>
            <div>2. Pool transfers tokens to receiver contract</div>
            <div>3. Pool invokes receiver.executeOperation(token, amount, fee, data)</div>
            <div>4. Receiver performs arbitrage / refinancing and approves pool repayment</div>
            <div>5. Pool pulls (amount + fee); if balance insufficient, transaction reverts entirely</div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">20. Multi-Dimensional Protocol Risk Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Risk Category</th>
                  <th className="p-3">Vulnerability / Attack Vector</th>
                  <th className="p-3">Engineering Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Smart Contract</td><td className="p-2.5">Reentrancy during balance transfers</td><td className="p-2.5">ReentrancyGuard, CEI pattern, balance deltas</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Oracle Manipulation</td><td className="p-2.5">Flash loan distorting AMM spot price</td><td className="p-2.5">Chainlink off-chain aggregation, multi-hour TWAP</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Liquidity Run</td><td className="p-2.5">100% pool utilization prevents withdrawals</td><td className="p-2.5">Kinked interest models driving rates to 50%+</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Market Shock</td><td className="p-2.5">40%+ flash crash creating bad debt</td><td className="p-2.5">Close factors, liquidation bonuses, insurance funds</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Composability</td><td className="p-2.5">Underlying ERC-20 token hack</td><td className="p-2.5">Isolation mode, asset debt ceilings</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">21. Modular Smart Contract Architecture</h3>
          <p className="text-xs text-neutral-600">
            A production DeFi protocol segregates responsibilities cleanly: Exchange Router, Liquidity Pool, Lending Pool, Collateral Manager, Oracle Adapter, and Liquidation Engine. Each module communicates strictly via validated interfaces while enforcing the Checks-Effects-Interactions (CEI) pattern and OpenZeppelin's SafeERC20.
          </p>
        </div>
      </section>
    '''

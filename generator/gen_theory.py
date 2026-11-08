# projectx/generator/gen_theory.py
# Generates the complete Theory tab (Parts 1 to 15) for Module 12

def get_theory_code():
    return r'''
          {/* TAB 1: ACADEMIC CURRICULUM (PARTS 1 - 15) */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* PART 1: Token Fundamentals */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Fundamentals
                  </h2>
                </div>

                {/* 1.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">1.1 What Is a Blockchain Token?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A blockchain token is a programmable digital asset issued and managed by a smart contract deployed on a blockchain network. Unlike native cryptocurrencies (such as BTC on Bitcoin or ETH on Ethereum), which exist at the base protocol level to compensate validators and meter computational resources, tokens are built on top of an existing smart contract platform using standardized contract interfaces.
                  </p>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Property</th>
                          <th className="p-3">Native Coin (e.g., ETH)</th>
                          <th className="p-3">Smart Contract Token (e.g., PrepToken / ERC-20)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Creation Level</td>
                          <td className="p-3">Protocol / Base Consensus Layer</td>
                          <td className="p-3">Application Layer (Solidity Smart Contract)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Storage Representation</td>
                          <td className="p-3">Native account state in Ethereum world state trie</td>
                          <td className="p-3">Internal state mapping in contract storage (<code className="font-mono text-stone-800">mapping(address =&gt; uint256)</code>)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Transfer Execution</td>
                          <td className="p-3">Native EVM transaction or opcode (<code className="font-mono text-stone-800">CALL</code> with value)</td>
                          <td className="p-3">Contract execution: <code className="font-mono text-stone-800">transfer(to, amount)</code> call mutating storage</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Gas Payment Utility</td>
                          <td className="p-3">Directly used to pay base network gas fees</td>
                          <td className="p-3">Requires ETH to pay for transaction gas (unless meta-tx/ERC-4337 used)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Conceptual Architecture: PrepToken Example</strong>
                    <p className="leading-relaxed">
                      If the PrepSpaces platform issues <strong>PrepToken (PREP)</strong>, the tokens do not exist as independent files or network packets. Instead, a smart contract deployed at address <code className="font-mono font-bold text-stone-800">0xPrep...</code> maintains a hash table. When Alice sends 100 PREP to Bob, the Ethereum Virtual Machine executes the contract's <code className="font-mono text-stone-800">transfer</code> code, decrementing Alice's entry by 100 and incrementing Bob's entry by 100.
                    </p>
                  </div>
                </div>

                {/* 1.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">1.2 Fungible vs Non-Fungible Tokens</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Digital assets are classified fundamentally by their degree of interchangeability:
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-stone-900 font-bold">Fungible Tokens (e.g., ERC-20)</strong>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Interchangeable</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Every individual token unit is identical in specification, utility, and market value. One unit of PREP held by Alice is mathematically indistinguishable from one unit of PREP held by Bob. Ideal for currencies, voting rights, and liquidity tokens.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-stone-900 font-bold">Non-Fungible Tokens (e.g., ERC-721)</strong>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">Unique Asset</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Every token possesses a distinct, globally unique identifier (<code className="font-mono text-stone-800">tokenId</code>) and immutable metadata. No two NFTs are identical. Used for verifiable credentials, real-world assets, digital artwork, and property deeds.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-bold mb-1">Semi-Fungible Tokens (ERC-1155)</strong>
                    <p className="leading-relaxed">
                      Semi-fungible tokens behave as fungible assets initially, but can transform into non-fungible assets under specific state transitions. For example, a general admission concert ticket is fungible with any other ticket before the event, but becomes a unique, non-fungible historic souvenir after the ticket is scanned.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 2: ERC Standards */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC Standards &amp; Interoperability
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">2.1 What Is an ERC?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    An <strong>ERC (Ethereum Request for Comments)</strong> is an application-level standard within the Ethereum Improvement Proposal (EIP) ecosystem. While core EIPs define low-level consensus rules and EVM opcodes, ERCs define standard smart contract API interfaces, event definitions, and execution conventions.
                  </p>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Primary Category</th>
                          <th className="p-3">Core Purpose &amp; Innovation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-20</td>
                          <td className="p-3 font-bold text-stone-800">Fungible Tokens</td>
                          <td className="p-3">Universal API for balances, transfers, and allowances across wallets and decentralized exchanges.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-721</td>
                          <td className="p-3 font-bold text-stone-800">Non-Fungible Tokens</td>
                          <td className="p-3">Discrete asset tracking via unique <code className="font-mono">tokenId</code>, safe transfer callbacks, and metadata URIs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-1155</td>
                          <td className="p-3 font-bold text-stone-800">Multi-Token Standard</td>
                          <td className="p-3">Manages thousands of fungible and non-fungible items in a single contract with batch operations.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-165</td>
                          <td className="p-3 font-bold text-stone-800">Interface Detection</td>
                          <td className="p-3">Allows contracts to query whether a target contract implements a specific interface (<code className="font-mono">supportsInterface</code>).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-2612</td>
                          <td className="p-3 font-bold text-stone-800">Permit Extension</td>
                          <td className="p-3">Gasless token approvals using off-chain EIP-712 typed cryptographic signatures.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-2981</td>
                          <td className="p-3 font-bold text-stone-800">NFT Royalties</td>
                          <td className="p-3">Standardized royalty information retrieval (<code className="font-mono">royaltyInfo</code>) for secondary marketplace sales.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-4626</td>
                          <td className="p-3 font-bold text-stone-800">Tokenized Vaults</td>
                          <td className="p-3">Yield-bearing vault standard unifying lending markets, aggregators, and interest-bearing tokens.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Why Standards Matter</strong>
                    <p className="leading-relaxed">
                      Without standards, every developer would create custom function names (e.g., <code className="font-mono text-stone-800">sendCoin</code> vs <code className="font-mono text-stone-800">moveToken</code>). Wallets like MetaMask and DEXs like Uniswap would need custom integrations for every single token. ERC standards ensure that any wallet, DEX, block explorer, or lending protocol can interact seamlessly with any compliant token on day one.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 3: ERC-20 Architecture */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Architecture
                  </h2>
                </div>

                {/* 3.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">3.1 Introduction to ERC-20</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Proposed by Fabian Vogelsteller and Vitalik Buterin in November 2015, ERC-20 has become the foundational building block of decentralized finance (DeFi). Internally, an ERC-20 token contract is a lightweight accounting ledger powered by two primary mappings:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Core ERC-20 Storage State</div>
                    <div>mapping(address =&gt; uint256) private _balances;</div>
                    <div>mapping(address =&gt; mapping(address =&gt; uint256)) private _allowances;</div>
                    <div>uint256 private _totalSupply;</div>
                  </div>
                </div>

                {/* 3.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">3.2 ERC-20 Standard Functions</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The ERC-20 standard defines exactly 6 mandatory functions:
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">1. totalSupply() external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the total number of circulating tokens in existence across all accounts.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">2. balanceOf(address account) external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the individual token balance owned by the queried address (<code className="font-mono">_balances[account]</code>).</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">3. transfer(address to, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Transfers <code className="font-mono">amount</code> tokens directly from the caller (<code className="font-mono">msg.sender</code>) to recipient <code className="font-mono">to</code>. Must emit a <code className="font-mono">Transfer</code> event.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">4. approve(address spender, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Authorizes third-party <code className="font-mono">spender</code> to withdraw up to <code className="font-mono">amount</code> tokens from the caller's account via <code className="font-mono">transferFrom</code>. Emits an <code className="font-mono">Approval</code> event.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">5. allowance(address owner, address spender) external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the remaining spending allowance granted by <code className="font-mono">owner</code> to <code className="font-mono">spender</code> (<code className="font-mono">_allowances[owner][spender]</code>).</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">6. transferFrom(address from, address to, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Allows an authorized spender to move <code className="font-mono">amount</code> tokens from <code className="font-mono">from</code> to <code className="font-mono">to</code>, reducing the caller's allowance by <code className="font-mono">amount</code>.</p>
                    </div>
                  </div>
                </div>

                {/* 3.3 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">3.3 ERC-20 Events</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    EVM smart contracts cannot read past events, but off-chain applications (block explorers, wallets, indexers) rely on events to track state:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold">// Mandatory ERC-20 Events</div>
                    <div>event Transfer(address indexed from, address indexed to, uint256 value);</div>
                    <div>event Approval(address indexed owner, address indexed spender, uint256 value);</div>
                  </div>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Event Indexing Mechanics</strong>
                    <p className="leading-relaxed">
                      The <code className="font-mono text-stone-800">indexed</code> parameters allow bloom filters in Ethereum block headers to rapidly locate all transfers involving a specific address without downloading or scanning every transaction in the block.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 4: Minting and Burning */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Minting and Burning
                  </h2>
                </div>

                {/* 4.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">4.1 Token Minting</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Minting is the creation of new tokens, increasing the total circulating supply. The mathematical state update is:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Minting Mathematical Conservation</div>
                    <div className="text-stone-300">S_new = S_old + M</div>
                    <div className="text-stone-300">balances[recipient]_new = balances[recipient]_old + M</div>
                    <div className="mt-2 text-stone-400">// Emitted Event Convention:</div>
                    <div className="text-emerald-400">emit Transfer(address(0), recipient, M);</div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    By convention, the <code className="font-mono text-stone-800">from</code> address is <code className="font-mono text-stone-800">address(0)</code> (0x0000...0000). This indicates to indexers that new tokens were generated out of the protocol, rather than transferred from an existing holder.
                  </p>
                </div>

                {/* 4.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">4.2 Token Burning</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Burning permanently removes tokens from circulation, decreasing total supply. Used in buy-and-burn tokenomics, deflationary mechanisms, or redemption protocols:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Burning Mathematical Conservation</div>
                    <div className="text-stone-300">S_new = S_old - B</div>
                    <div className="text-stone-300">balances[burner]_new = balances[burner]_old - B</div>
                    <div className="mt-2 text-stone-400">// Emitted Event Convention:</div>
                    <div className="text-emerald-400">emit Transfer(burner, address(0), B);</div>
                  </div>
                </div>
              </section>

              {/* PART 5: Allowance & Approval Mechanisms */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Allowance &amp; Approval Mechanisms
                  </h2>
                </div>

                {/* 5.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">5.1 What Is an Allowance?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Direct transfers (<code className="font-mono text-stone-800">transfer</code>) only work when an Externally Owned Account (EOA) initiates a send. But smart contracts cannot withdraw tokens from user wallets without prior permission. The two-step approval pattern solves this:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <strong className="text-stone-900 block font-bold">The Two-Step DEX Swap Workflow:</strong>
                    <ol className="list-decimal pl-4 space-y-1 text-stone-700 leading-relaxed">
                      <li><strong>Step 1 (Approve):</strong> Alice calls <code className="font-mono text-stone-800">approve(UniswapRouter, 500 PREP)</code>. Her wallet sets <code className="font-mono text-stone-800">_allowances[Alice][UniswapRouter] = 500</code>.</li>
                      <li><strong>Step 2 (Swap &amp; TransferFrom):</strong> Alice calls <code className="font-mono text-stone-800">swapExactTokensForETH(...)</code> on Uniswap. Uniswap invokes <code className="font-mono text-stone-800">prepToken.transferFrom(Alice, poolAddress, 500)</code>.</li>
                      <li><strong>State Mutation:</strong> The token contract verifies Alice has &ge; 500 PREP and Uniswap's allowance is &ge; 500. It deducts 500 from the allowance and transfers 500 PREP to the pool.</li>
                    </ol>
                  </div>
                </div>

                {/* 5.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">5.2 The Approval Security Problem</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The classic ERC-20 approval design contains two major security risks:
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50 text-xs">
                      <strong className="text-red-900 font-bold block mb-1">1. Unlimited Approvals Risk (type(uint256).max)</strong>
                      <p className="text-red-800 leading-relaxed">
                        To save users from signing an approval transaction before every trade, DApps routinely request approval for <code className="font-mono font-bold">2^256 - 1</code> tokens. If that DEX router or bridge is later hacked or possesses an exploit, the attacker can drain all tokens from every wallet that ever granted unlimited approval!
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 text-xs">
                      <strong className="text-amber-900 font-bold block mb-1">2. Approval Front-Running Race Condition</strong>
                      <p className="text-amber-800 leading-relaxed">
                        If Alice has approved Bob for 100 tokens and decides to reduce it to 50 via <code className="font-mono text-stone-800">approve(Bob, 50)</code>, Bob can monitor the mempool, front-run Alice's transaction with <code className="font-mono text-stone-800">transferFrom(Alice, 100)</code>, drain 100 tokens, and then drain an additional 50 tokens once Alice's transaction confirms!
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Modern Mitigations:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li><strong>Reset to Zero First:</strong> Call <code className="font-mono text-stone-800">approve(spender, 0)</code> before updating to a new non-zero value.</li>
                      <li><strong>increaseAllowance / decreaseAllowance:</strong> Atomically modify allowance based on previous expected value.</li>
                      <li><strong>ERC-2612 Permit:</strong> Replaces on-chain approvals with off-chain cryptographic signatures verified via EIP-712.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PART 6: Transfer Security & Invariants */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Transfer Security &amp; Invariants
                  </h2>
                </div>

                {/* 6.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">6.1 Common ERC-20 Vulnerabilities</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Vulnerability</th>
                          <th className="p-3">Root Cause</th>
                          <th className="p-3">Auditing &amp; Mitigation Strategy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-red-600">Unrestricted Minting</td>
                          <td className="p-3">Missing <code className="font-mono">onlyOwner</code> or access control modifier on mint function.</td>
                          <td className="p-3">Use OpenZeppelin <code className="font-mono">AccessControl</code> or <code className="font-mono">Ownable2Step</code>.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Missing Return Value</td>
                          <td className="p-3">Tokens like USDT return <code className="font-mono">void</code> instead of <code className="font-mono">bool</code> on transfer.</td>
                          <td className="p-3">Use OpenZeppelin <code className="font-mono">SafeERC20.safeTransfer</code> wrapper.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Fee-on-Transfer Mismatch</td>
                          <td className="p-3">Token deducts a tax on transfer, so recipient receives less than <code className="font-mono">amount</code>.</td>
                          <td className="p-3">Measure actual balance change (<code className="font-mono">balanceAfter - balanceBefore</code>) in vaults.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Reentrancy in ERC-777</td>
                          <td className="p-3">Hooks like <code className="font-mono">tokensToSend</code> hand control back to sender during transfer.</td>
                          <td className="p-3">Enforce CEI pattern (Checks-Effects-Interactions) and <code className="font-mono">ReentrancyGuard</code>.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 6.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">6.2 Token Transfer Conservation Invariants</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Formal verification and property-based fuzzing rely on mathematical invariants that must never be violated under any execution sequence:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Invariant 1: Total Supply Conservation</div>
                    <div>sum(balances[account] for all account) == totalSupply</div>
                    <div className="mt-2 text-amber-400 font-bold">// Invariant 2: Transfer Conservation (Non-Mint/Burn)</div>
                    <div>balanceOf(A)_new + balanceOf(B)_new == balanceOf(A)_old + balanceOf(B)_old</div>
                  </div>
                </div>
              </section>

              {/* PART 7: ERC-721 NFT Standard */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-721 Non-Fungible Token Standard
                  </h2>
                </div>

                {/* 7.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">7.1 Introduction to ERC-721</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Authored by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs in January 2018, ERC-721 standardizes non-fungible assets. Instead of tracking aggregate balances per account, an ERC-721 contract tracks discrete asset ownership using a unique integer:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Core ERC-721 Storage State</div>
                    <div>mapping(uint256 =&gt; address) private _owners;</div>
                    <div>mapping(address =&gt; uint256) private _balances; // Count of NFTs held by owner</div>
                    <div>mapping(uint256 =&gt; address) private _tokenApprovals;</div>
                    <div>mapping(address =&gt; mapping(address =&gt; bool)) private _operatorApprovals;</div>
                  </div>
                </div>

                {/* 7.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">7.2 ERC-721 Core Functions</h3>
                  <div className="mt-3 space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">ownerOf(uint256 tokenId) view returns (address)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Returns the owner address of the specified discrete token ID.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">safeTransferFrom(address from, address to, uint256 tokenId)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Transfers token and verifies whether recipient contract implements <code className="font-mono">onERC721Received</code> callback.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">setApprovalForAll(address operator, bool approved)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Grants operator (e.g. OpenSea, Blur) permission to manage all NFTs owned by caller.</p>
                    </div>
                  </div>
                </div>

                {/* 7.3 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">7.3 Safe Transfers &amp; onERC721Received Callback</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    If an NFT is transferred to a smart contract address that does not implement receiver handling logic, the NFT becomes permanently locked. To prevent this, <code className="font-mono text-stone-800">safeTransferFrom</code> checks if the recipient has contract bytecode. If true, it calls:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div>IERC721Receiver(to).onERC721Received(operator, from, tokenId, data)</div>
                    <div className="text-stone-400 mt-1">// Must return magic bytes4 selector:</div>
                    <div className="text-emerald-400">0x150b7a02 == IERC721Receiver.onERC721Received.selector</div>
                  </div>
                </div>
              </section>

              {/* PART 8: NFT Metadata and Token URI */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Metadata and Token URI Architecture
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">8.1 What Is NFT Metadata?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The ERC-721 contract itself only stores ownership numbers (<code className="font-mono text-stone-800">tokenId =&gt; owner</code>). Rich information—such as the item's name, description, media link, and rarity traits—is externalized via <code className="font-mono text-stone-800">tokenURI(tokenId)</code> returning a pointer to a JSON metadata schema:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// OpenSea &amp; EIP-721 Standard Metadata JSON Schema</div>
                    <pre className="text-stone-300 mt-2 text-[11px] leading-relaxed">
{`{
  "name": "PrepSpaces Genesis Certificate #1",
  "description": "Verifiable University Blockchain Engineering Credential",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png",
  "external_url": "https://prepspaces.com/credentials/1",
  "attributes": [
    { "trait_type": "Specialization", "value": "Smart Contract Auditing" },
    { "trait_type": "Audit Score", "value": 98 },
    { "trait_type": "Course Batch", "value": "2026-Q1" },
    { "trait_type": "Rarity Tier", "value": "Legendary" }
  ]
}`}
                    </pre>
                  </div>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Storage Architecture</th>
                          <th className="p-3">Permanence &amp; Trust</th>
                          <th className="p-3">Gas Cost &amp; Trade-offs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Decentralized (IPFS / Arweave)</td>
                          <td className="p-3">Content-addressed via cryptographic hash. Immutable once pinned.</td>
                          <td className="p-3">Low gas cost on-chain (only stores CID string). Requires persistent pinning services.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Fully On-Chain (Base64 SVG)</td>
                          <td className="p-3">100% decentralized and permanent. Lives as long as Ethereum runs.</td>
                          <td className="p-3">Extremely high gas to deploy bytecode. Restricted to lightweight SVGs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Centralized Web Server (HTTPS)</td>
                          <td className="p-3">Fragile: Server can go offline, rug pull metadata, or be seized.</td>
                          <td className="p-3">Lowest gas, but introduces single point of failure and centralized trust.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 9: ERC-1155 Multi-Token Standard */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-1155 Multi-Token Standard
                  </h2>
                </div>

                {/* 9.1 & 9.2 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">9.1 &amp; 9.2 Multi-Token Architecture &amp; Batch Operations</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Developed by Enjin in 2018, ERC-1155 consolidates multiple token types (fungible and non-fungible) into a single smart contract. In a gaming economy, an ERC-20 contract for Gold, an ERC-20 contract for Silver, and an ERC-721 contract for Weapons would require 3 separate contract deployments. With ERC-1155, all assets coexist in one mapping:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// ERC-1155 Storage Layout</div>
                    <div>// mapping(tokenId =&gt; mapping(account =&gt; balance))</div>
                    <div>mapping(uint256 =&gt; mapping(address =&gt; uint256)) private _balances;</div>
                    <div className="mt-2 text-stone-400">// Native Batch Transfer:</div>
                    <div className="text-emerald-400">safeBatchTransferFrom(from, to, ids[], amounts[], data);</div>
                  </div>
                </div>

                {/* 9.3 Comparison */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">9.3 Comparison: ERC-20 vs ERC-721 vs ERC-1155</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3">ERC-20</th>
                          <th className="p-3">ERC-721</th>
                          <th className="p-3">ERC-1155</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Asset Type</td>
                          <td className="p-3">Fungible only</td>
                          <td className="p-3">Non-Fungible only</td>
                          <td className="p-3">Fungible, Non-Fungible, &amp; Semi-Fungible</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Contract Count</td>
                          <td className="p-3">1 contract per token type</td>
                          <td className="p-3">1 contract per NFT collection</td>
                          <td className="p-3">1 contract for thousands of asset types</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Batch Transfers</td>
                          <td className="p-3">No (Requires multicall loop)</td>
                          <td className="p-3">No (Multiple transactions)</td>
                          <td className="p-3 font-bold text-emerald-600">Yes (Native safeBatchTransferFrom)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Gas Efficiency</td>
                          <td className="p-3">Standard</td>
                          <td className="p-3">High gas for bulk transfers</td>
                          <td className="p-3 font-bold text-emerald-600">60%–80% lower gas for multi-asset actions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 10: NFT Minting Economics */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Minting Architecture &amp; Economics
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">10.1 &amp; 10.2 Minting Pipeline &amp; Economic Controls</h3>
                  <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-2">5-Stage NFT Creation Pipeline:</strong>
                    <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed text-stone-600">
                      <li><strong>Media Generation &amp; Hashing:</strong> High-resolution digital artwork is generated and cryptographically hashed (SHA-256).</li>
                      <li><strong>Decentralized Pinning:</strong> Media assets and JSON metadata schemas are uploaded and pinned to IPFS nodes (IPFS CID generation).</li>
                      <li><strong>Smart Contract Deployment:</strong> ERC-721 contract is deployed with hard supply caps (<code className="font-mono">MAX_SUPPLY</code>) and base URI.</li>
                      <li><strong>Allowlist Phase (Merkle Tree):</strong> Privileged community members mint using cryptographic Merkle proofs, avoiding expensive on-chain whitelist storage.</li>
                      <li><strong>Public Mint Phase:</strong> Open public minting with per-wallet transaction limits (<code className="font-mono">MAX_PER_WALLET</code>) and payment verification (<code className="font-mono">msg.value == price * quantity</code>).</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* PART 11: NFT Marketplaces & ERC-2981 */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Marketplaces &amp; Royalties (ERC-2981)
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">11.1 Marketplace Architecture</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Decentralized NFT marketplaces (such as OpenSea, LooksRare, or Seaport) operate non-custodially. The seller lists their token by granting operator approval (<code className="font-mono text-stone-800">setApprovalForAll</code>) and signing an off-chain cryptographic order (EIP-712).
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// ERC-2981 Royalty Standard Interface</div>
                    <div>function royaltyInfo(uint256 tokenId, uint256 salePrice)</div>
                    <div>&nbsp;&nbsp;external view returns (address receiver, uint256 royaltyAmount);</div>
                  </div>

                  <div className="mt-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-bold mb-1">Architectural Limitation of ERC-2981:</strong>
                    <p className="leading-relaxed">
                      ERC-2981 is an informational standard. It signals to marketplaces what royalty should be paid, but does not enforce payment on-chain during raw <code className="font-mono text-amber-800">safeTransferFrom</code> calls. Zero-royalty platforms can bypass creator fees unless the NFT contract integrates an operator filter registry.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 12: OpenZeppelin Implementations */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    OpenZeppelin Token Implementations
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">12.1 Why OpenZeppelin?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Writing token standards from scratch is dangerous. Subtle bugs in allowance checking, overflow vulnerabilities, or reentrancy flaws have cost Web3 projects hundreds of millions of dollars. OpenZeppelin provides battle-tested, modular, and formally verified contract implementations:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract PrepToken is ERC20, Ownable2Step {
    uint256 public constant MAX_SUPPLY = 1_000_000 * 10 ** 18;

    error CapExceeded(uint256 attempted, uint256 maxSupply);

    constructor() ERC20("PrepToken", "PREP") Ownable2Step(msg.sender) {
        _mint(msg.sender, 500_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        if (totalSupply() + amount > MAX_SUPPLY) {
            revert CapExceeded(totalSupply() + amount, MAX_SUPPLY);
        }
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* PART 13: Tokenomics Fundamentals */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Economics Fundamentals (Tokenomics)
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">13.1 &amp; 13.2 Supply Dynamics &amp; Distribution Allocation</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Stakeholder Group</th>
                          <th className="p-3">Allocation %</th>
                          <th className="p-3">Target Supply (PREP)</th>
                          <th className="p-3">Vesting &amp; Lockup Schedule</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Community Ecosystem &amp; Grants</td>
                          <td className="p-3 font-mono font-bold text-emerald-600">40.0%</td>
                          <td className="p-3 font-mono">400,000 PREP</td>
                          <td className="p-3">10% at TGE, 48-month linear emission</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Core Engineering &amp; Development</td>
                          <td className="p-3 font-mono font-bold text-stone-800">20.0%</td>
                          <td className="p-3 font-mono">200,000 PREP</td>
                          <td className="p-3">12-month cliff, 36-month linear vest</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">DAO Treasury Reserve</td>
                          <td className="p-3 font-mono font-bold text-stone-800">15.0%</td>
                          <td className="p-3 font-mono">150,000 PREP</td>
                          <td className="p-3">Locked in timelock governance contract</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Early Strategic Investors</td>
                          <td className="p-3 font-mono font-bold text-stone-800">15.0%</td>
                          <td className="p-3 font-mono">150,000 PREP</td>
                          <td className="p-3">12-month cliff, 24-month linear vest</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Founders &amp; Key Advisors</td>
                          <td className="p-3 font-mono font-bold text-stone-800">10.0%</td>
                          <td className="p-3 font-mono">100,000 PREP</td>
                          <td className="p-3">12-month cliff, 48-month linear vest</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 14: Token Vesting */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Vesting &amp; Cliff Architecture
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">14.1 Linear Vesting Mathematics</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Token vesting ensures stakeholders cannot liquidate their allocations immediately upon launch, protecting community holders from sudden sell-offs. The linear vesting formula with cliff period is:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Linear Vesting Formula with Cliff</div>
                    <div>If t &lt; T_cliff: Vested(t) = 0</div>
                    <div>If T_cliff &le; t &lt; T_total: Vested(t) = TotalAllocation * (t / T_total)</div>
                    <div>If t &ge; T_total: Vested(t) = TotalAllocation</div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Example Calculation:</strong>
                    <p className="leading-relaxed">
                      For a 100,000 PREP grant with a 12-month cliff on a 48-month schedule:
                      <br />• At Month 6: 0 PREP vested (cliff active).
                      <br />• At Month 12: Exactly 25,000 PREP unlocks simultaneously (100,000 &times; 12/48).
                      <br />• At Month 24: Exactly 50,000 PREP has vested.
                      <br />• At Month 48: 100,000 PREP fully vested.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 15: Governance Tokens */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Governance Tokens &amp; On-Chain DAOs
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">15.1 Governance Tokens</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Governance tokens represent decentralized voting power in on-chain DAOs. To defend against flash-loan attacks (where an attacker borrows millions in tokens to manipulate a vote within a single block), modern governance contracts use historical block checkpoints (<code className="font-mono text-stone-800">ERC20Votes</code>):
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// OpenZeppelin ERC20Votes Checkpointing</div>
                    <div>getPastVotes(account, proposalSnapshotBlock)</div>
                    <div className="text-stone-400 mt-1">// Voting power is locked to the block PRIOR to proposal launch!</div>
                  </div>
                </div>
              </section>
            </div>
          )}
'''

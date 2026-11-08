# projectx/generator/gen_lab.py

def get_lab_code():
    return r'''
          {/* TAB 3: PRACTICAL LAB & PROJECT ASSIGNMENT (PARTS 16 & 17) */}
          {activeTab === "lab" && (
            <div className="space-y-10">
              {/* PART 16: Practical Lab */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 16 • Hands-On Engineering Laboratory
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Create an ERC-20 Token &amp; NFT Collection
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Build, test, deploy, and verify production-grade OpenZeppelin smart contracts on the Ethereum Sepolia testnet.
                  </p>
                </div>

                {/* Lab Environment Table */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                      <tr>
                        <th className="p-3">Tool / Framework</th>
                        <th className="p-3">Version / Environment</th>
                        <th className="p-3">Purpose in Architecture</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Solidity</td>
                        <td className="p-3 font-mono text-orange-600">^0.8.24</td>
                        <td className="p-3">Smart contract implementation with built-in arithmetic overflow protection.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Hardhat</td>
                        <td className="p-3 font-mono text-stone-800">Latest Node.js</td>
                        <td className="p-3">Local blockchain simulation, compilation, scripting, and automated testing framework.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">@openzeppelin/contracts</td>
                        <td className="p-3 font-mono text-stone-800">^5.0.0</td>
                        <td className="p-3">Audited ERC-20, ERC-721URIStorage, and Ownable security primitives.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Sepolia Testnet</td>
                        <td className="p-3 font-mono text-stone-800">Chain ID: 11155111</td>
                        <td className="p-3">Ethereum PoS public testnet for live testing and explorer verification.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step 1 */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 1 — Initialize Hardhat Workspace &amp; Directory Tree
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <div className="text-amber-400 font-bold mb-1">// Terminal Setup Commands</div>
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`mkdir erc-token-lab
cd erc-token-lab
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts`}
                    </pre>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700">
                    <strong className="block text-stone-900 font-bold mb-1 font-sans">Required Project Directory Structure:</strong>
                    erc-token-lab/<br />
                    ├── contracts/<br />
                    │&nbsp;&nbsp;&nbsp;├── PrepToken.sol<br />
                    │&nbsp;&nbsp;&nbsp;└── PrepSpacesNFT.sol<br />
                    ├── metadata/<br />
                    │&nbsp;&nbsp;&nbsp;└── 1.json<br />
                    ├── scripts/<br />
                    │&nbsp;&nbsp;&nbsp;└── deploy.js<br />
                    ├── test/<br />
                    │&nbsp;&nbsp;&nbsp;├── PrepToken.test.js<br />
                    │&nbsp;&nbsp;&nbsp;└── PrepSpacesNFT.test.js<br />
                    └── hardhat.config.js
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 2 — Implement Capped ERC-20 Token: contracts/PrepToken.sol
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrepToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000 * 10 ** 18;

    constructor() ERC20("PrepToken", "PREP") Ownable(msg.sender) {
        _mint(msg.sender, 500_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(
            totalSupply() + amount <= MAX_SUPPLY,
            "Maximum supply exceeded"
        );
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 3 — Implement ERC-721 NFT Collection: contracts/PrepSpacesNFT.sol
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrepSpacesNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("PrepSpaces Genesis", "PREPNFT") Ownable(msg.sender) {}

    function safeMint(address to, string memory uri) public onlyOwner returns (uint256) {
        _nextTokenId++;
        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 4 — Create OpenSea Compatible Metadata: metadata/1.json
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`{
  "name": "PrepSpaces Genesis Certificate #1",
  "description": "Certified University Blockchain Engineering Graduate",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png",
  "attributes": [
    { "trait_type": "Track", "value": "Blockchain & Smart Contracts" },
    { "trait_type": "Auditing Grade", "value": "A+" },
    { "trait_type": "Specialization", "value": "EVM Internals & DeFi" },
    { "trait_type": "Issue Year", "value": 2026 }
  ]
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 5 & 6 Tests */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 5 &amp; 6 — Automated Unit Test Suites (Mocha &amp; Chai)
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <div className="text-amber-400 font-bold mb-1">// test/PrepToken.test.js</div>
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PrepToken ERC-20 Test Suite", function () {
  let token, owner, alice, bob;

  beforeEach(async function () {
    [owner, alice, bob] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("PrepToken");
    token = await Factory.deploy();
  });

  it("Should assign initial supply of 500,000 PREP to owner", async function () {
    const expected = ethers.parseEther("500000");
    expect(await token.balanceOf(owner.address)).to.equal(expected);
    expect(await token.totalSupply()).to.equal(expected);
  });

  it("Should allow owner to mint additional tokens up to MAX_SUPPLY", async function () {
    const mintAmount = ethers.parseEther("100000");
    await token.mint(alice.address, mintAmount);
    expect(await token.balanceOf(alice.address)).to.equal(mintAmount);
  });

  it("Should revert when minting exceeds 1,000,000 MAX_SUPPLY", async function () {
    const excess = ethers.parseEther("500001");
    await expect(token.mint(alice.address, excess)).to.be.revertedWith(
      "Maximum supply exceeded"
    );
  });

  it("Should allow token burning and decrement total supply", async function () {
    const burnAmt = ethers.parseEther("50000");
    await token.burn(burnAmt);
    expect(await token.totalSupply()).to.equal(ethers.parseEther("450000"));
  });
});`}
                    </pre>
                  </div>
                </div>

                {/* Step 7 Deployment */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 7 — Sepolia Deployment &amp; Etherscan Verification
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// Run deployment to Sepolia:
npx hardhat run scripts/deploy.js --network sepolia

// Verify source code on Etherscan:
npx hardhat verify --network sepolia <DEPLOYED_TOKEN_ADDRESS>`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* PART 17: Advanced Project Assignment */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 17 • Capstone Project Assignment
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Build a Complete PrepSpaces Token Ecosystem
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Design and deploy a unified Web3 ecosystem combining a capped ERC-20 utility token, a soulbound ERC-721 certification pass, and a linear token vesting vault with cliff protection.
                  </p>
                </div>

                {/* Rubric Table */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                      <tr>
                        <th className="p-3">Evaluation Milestone</th>
                        <th className="p-3">Weight</th>
                        <th className="p-3">Technical Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-bold text-stone-900">1. Capped ERC-20 Utility Token</td>
                        <td className="p-3 font-mono font-bold text-orange-600">25 Marks</td>
                        <td className="p-3">Implements hard supply ceiling, burning mechanics, access control, and zero-address transfer guards.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">2. ERC-721 NFT Certification Pass</td>
                        <td className="p-3 font-mono font-bold text-orange-600">25 Marks</td>
                        <td className="p-3">OpenZeppelin ERC721URIStorage, IPFS JSON metadata schema, safeTransferFrom safety callbacks.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">3. Automated Unit Testing Suite</td>
                        <td className="p-3 font-mono font-bold text-orange-600">20 Marks</td>
                        <td className="p-3">&gt;95% line coverage in Hardhat or Foundry, asserting supply cap invariants, revert errors, and allowances.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">4. Linear Vesting Contract with Cliff</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15 Marks</td>
                        <td className="p-3">Mathematical implementation of 12-month cliff with 48-month linear release formula, nonReentrant guards.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">5. Sepolia Deployment &amp; Explorer Verification</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15 Marks</td>
                        <td className="p-3">Live verified contracts on Sepolia Etherscan with documented README and reproduction scripts.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}
'''

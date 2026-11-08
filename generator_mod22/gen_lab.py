# -*- coding: utf-8 -*-
"""
Module 22 Lab & Practical Assignments:
- Practical Lab: Build a Supply Chain Tracking Application Using Hyperledger Fabric (Steps 1-12)
- Complete Go Chaincode: supplychain.go and main.go
- CouchDB Declarative Index JSON & Private Data Collections Config
- Step-by-Step Test-Network CLI Commands
- Testing & Security Validation Matrix (12 Scenarios)
- 6 Advanced Practical Engineering Assignments
- 5 Numerical Problems with Mathematical Derivations & Official Answer Key Table
"""

def generate_lab_and_challenges():
    return r'''
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Practical Lab Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>HANDS-ON ENTERPRISE LAB</span>
              <span>•</span>
              <span>HYPERLEDGER FABRIC &amp; GO CHAINCODE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Practical Lab: Build a Multi-Organization Supply Chain Application Using Hyperledger Fabric
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Design, develop, and deploy an enterprise-grade multi-organization supply chain tracking platform using Hyperledger Fabric 3.1.x, Go chaincode, CouchDB state databases, and Docker container infrastructure. You will implement deterministic business logic, two-step custody transfers, CouchDB declarative indexes, multi-party endorsement policies, and private commercial data collections.
            </p>

            {/* Tools Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">1. Required Technology Stack</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Technology</th>
                      <th className="p-3">Version / Environment</th>
                      <th className="p-3">Purpose in Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Hyperledger Fabric</td>
                      <td className="p-3">v3.1.5 (or v2.5.x LTS)</td>
                      <td className="p-3">Permissioned enterprise distributed ledger engine and channel infrastructure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Go (Golang)</td>
                      <td className="p-3">v1.20+</td>
                      <td className="p-3">Deterministic smart contract (chaincode) authoring using Fabric Contract API.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Fabric CA</td>
                      <td className="p-3">v1.5.x</td>
                      <td className="p-3">Identity registration, enrollment, and X.509 certificate issuance for Org1 &amp; Org2.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Docker &amp; Compose</td>
                      <td className="p-3">v24.x+</td>
                      <td className="p-3">Containerized execution of peers, orderers, CAs, and CouchDB instances.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Apache CouchDB</td>
                      <td className="p-3">v3.4.x</td>
                      <td className="p-3">Peer world-state database supporting rich JSON Mango queries and secondary indexes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Fabric Gateway SDK</td>
                      <td className="p-3">Node.js / Go</td>
                      <td className="p-3">High-level client connectivity, endorsement gathering, and commit monitoring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Folder Structure */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">2. Enterprise Project Folder Hierarchy</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{`fabric-supply-chain/
├── chaincode/
│   └── supplychain/
│       ├── main.go
│       ├── supplychain.go
│       ├── go.mod
│       ├── collections_config.json
│       └── META-INF/
│           └── statedb/
│               └── couchdb/
│                   └── indexes/
│                       └── productStatus.json
├── backend/
│   ├── server.js
│   ├── routes/products.js
│   ├── services/fabricService.js
│   └── config/fabricConfig.js
└── frontend/
    └── src/
        ├── pages/
        │   ├── Dashboard.jsx
        │   ├── Products.jsx
        │   └── ShipmentTracking.jsx
        └── components/
            ├── ProductCard.jsx
            └── StatusTracker.jsx`}</pre>
              </div>
            </div>

            {/* Go Chaincode: supplychain.go */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3. Complete Go Chaincode: supplychain.go</h3>
                <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs font-mono">Go 1.20+ • Fabric Contract API</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed max-h-[600px] overflow-y-auto">
                <pre>{`package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type SupplyChainContract struct {
	contractapi.Contract
}

type Product struct {
	DocType         string \`json:"docType"\`
	ProductID       string \`json:"productId"\`
	ProductName     string \`json:"productName"\`
	BatchNumber     string \`json:"batchNumber"\`
	Manufacturer    string \`json:"manufacturer"\`
	Origin          string \`json:"origin"\`
	Location        string \`json:"location"\`
	Status          string \`json:"status"\`
	OwnerMSP        string \`json:"ownerMSP"\`
	PendingOwnerMSP string \`json:"pendingOwnerMSP,omitempty"\`
	CreatedBy       string \`json:"createdBy"\`
	CreatedAt       string \`json:"createdAt"\`
	UpdatedAt       string \`json:"updatedAt"\`
}

func productKey(id string) string {
	return "PRODUCT_" + id
}

func getCallerMSP(ctx contractapi.TransactionContextInterface) (string, error) {
	return ctx.GetClientIdentity().GetMSPID()
}

// Deterministic timestamp: read from transaction envelope, NEVER host clock!
func getTxTime(ctx contractapi.TransactionContextInterface) (string, error) {
	ts, err := ctx.GetStub().GetTxTimestamp()
	if err != nil {
		return "", err
	}
	return time.Unix(ts.Seconds, int64(ts.Nanos)).UTC().Format(time.RFC3339Nano), nil
}

func readProduct(ctx contractapi.TransactionContextInterface, productID string) (*Product, error) {
	data, err := ctx.GetStub().GetState(productKey(productID))
	if err != nil {
		return nil, err
	}
	if data == nil {
		return nil, fmt.Errorf("product %s does not exist", productID)
	}
	var product Product
	if err := json.Unmarshal(data, &product); err != nil {
		return nil, err
	}
	return &product, nil
}

func saveProduct(ctx contractapi.TransactionContextInterface, product *Product) error {
	data, err := json.Marshal(product)
	if err != nil {
		return err
	}
	return ctx.GetStub().PutState(productKey(product.ProductID), data)
}

func validTransition(current, next string) bool {
	switch current {
	case "CREATED":
		return next == "PACKED"
	case "PACKED":
		return next == "SHIPPED"
	case "SHIPPED":
		return next == "DELIVERED"
	}
	return false
}

func emitProductEvent(ctx contractapi.TransactionContextInterface, eventName string, product *Product) error {
	payload, err := json.Marshal(product)
	if err != nil {
		return err
	}
	return ctx.GetStub().SetEvent(eventName, payload)
}

// CreateProduct: Only Org1MSP (Manufacturer) can register products
func (s *SupplyChainContract) CreateProduct(
	ctx contractapi.TransactionContextInterface,
	productID string,
	productName string,
	batchNumber string,
	origin string,
) error {
	if productID == "" || productName == "" || batchNumber == "" || origin == "" {
		return fmt.Errorf("all product fields are required")
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}
	if mspID != "Org1MSP" {
		return fmt.Errorf("only the manufacturer (Org1MSP) can create products")
	}

	existing, err := ctx.GetStub().GetState(productKey(productID))
	if err != nil {
		return err
	}
	if existing != nil {
		return fmt.Errorf("product %s already exists", productID)
	}

	userID, err := ctx.GetClientIdentity().GetID()
	if err != nil {
		return err
	}

	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}

	product := Product{
		DocType:         "product",
		ProductID:       productID,
		ProductName:     productName,
		BatchNumber:     batchNumber,
		Manufacturer:    mspID,
		Origin:          origin,
		Location:        origin,
		Status:          "CREATED",
		OwnerMSP:        mspID,
		PendingOwnerMSP: "",
		CreatedBy:       userID,
		CreatedAt:       timestamp,
		UpdatedAt:       timestamp,
	}

	if err := saveProduct(ctx, &product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "ProductCreated", &product)
}

func (s *SupplyChainContract) ReadProduct(ctx contractapi.TransactionContextInterface, productID string) (*Product, error) {
	return readProduct(ctx, productID)
}

// UpdateStatus: Current owner updates location/status; Manufacturer can initiate RECALLED
func (s *SupplyChainContract) UpdateStatus(
	ctx contractapi.TransactionContextInterface,
	productID string,
	newStatus string,
	newLocation string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}

	if newStatus == "RECALLED" {
		if mspID != "Org1MSP" {
			return fmt.Errorf("only the manufacturer can recall products")
		}
	} else {
		if mspID != product.OwnerMSP {
			return fmt.Errorf("only current holding organization can update status")
		}
		if !validTransition(product.Status, newStatus) {
			return fmt.Errorf("invalid product status transition from %s to %s", product.Status, newStatus)
		}
	}

	if newLocation == "" {
		return fmt.Errorf("location is required")
	}

	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}

	product.Status = newStatus
	product.Location = newLocation
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "ProductStatusChanged", product)
}

// TransferCustody: Step 1 of Two-Step Custody Handshake
func (s *SupplyChainContract) TransferCustody(
	ctx contractapi.TransactionContextInterface,
	productID string,
	newOwnerMSP string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}
	if mspID != product.OwnerMSP {
		return fmt.Errorf("only current owner can transfer custody")
	}
	if product.Status != "SHIPPED" {
		return fmt.Errorf("product must be in SHIPPED status before custody transfer")
	}
	if product.PendingOwnerMSP != "" {
		return fmt.Errorf("custody transfer already pending to %s", product.PendingOwnerMSP)
	}
	if newOwnerMSP != "Org1MSP" && newOwnerMSP != "Org2MSP" {
		return fmt.Errorf("unsupported receiving organization MSP: %s", newOwnerMSP)
	}
	if newOwnerMSP == product.OwnerMSP {
		return fmt.Errorf("new owner MSP must be different from current owner")
	}

	product.PendingOwnerMSP = newOwnerMSP
	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "CustodyTransferRequested", product)
}

// AcceptCustodyTransfer: Step 2 of Two-Step Custody Handshake
func (s *SupplyChainContract) AcceptCustodyTransfer(
	ctx contractapi.TransactionContextInterface,
	productID string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}

	if product.PendingOwnerMSP == "" {
		return fmt.Errorf("no pending custody transfer for product %s", productID)
	}
	if mspID != product.PendingOwnerMSP {
		return fmt.Errorf("only the designated receiving organization (%s) can accept custody", product.PendingOwnerMSP)
	}

	product.OwnerMSP = mspID
	product.PendingOwnerMSP = ""
	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "CustodyTransferred", product)
}

// GetAllProducts: Range query over world state
func (s *SupplyChainContract) GetAllProducts(ctx contractapi.TransactionContextInterface) ([]*Product, error) {
	iterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var products []*Product
	for iterator.HasNext() {
		entry, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		var product Product
		if err := json.Unmarshal(entry.Value, &product); err != nil {
			return nil, err
		}
		if product.DocType == "product" {
			products = append(products, &product)
		}
	}
	return products, nil
}

// GetProductsByStatus: Rich CouchDB Mango Query
func (s *SupplyChainContract) GetProductsByStatus(
	ctx contractapi.TransactionContextInterface,
	status string,
) ([]*Product, error) {
	queryString := fmt.Sprintf(\`{"selector":{"docType":"product","status":%q}}\`, status)
	iterator, err := ctx.GetStub().GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var products []*Product
	for iterator.HasNext() {
		entry, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		var product Product
		if err := json.Unmarshal(entry.Value, &product); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}
	return products, nil
}

type HistoryRecord struct {
	TxID      string          \`json:"txId"\`
	Timestamp string          \`json:"timestamp"\`
	IsDelete  bool            \`json:"isDelete"\`
	Value     json.RawMessage \`json:"value,omitempty"\`
}

// GetHistory: Retrieve complete immutable block history of an asset
func (s *SupplyChainContract) GetHistory(
	ctx contractapi.TransactionContextInterface,
	productID string,
) ([]HistoryRecord, error) {
	iterator, err := ctx.GetStub().GetHistoryForKey(productKey(productID))
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var records []HistoryRecord
	for iterator.HasNext() {
		item, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		timestamp := ""
		if item.Timestamp != nil {
			timestamp = time.Unix(item.Timestamp.Seconds, int64(item.Timestamp.Nanos)).UTC().Format(time.RFC3339Nano)
		}
		record := HistoryRecord{
			TxID:      item.TxId,
			Timestamp: timestamp,
			IsDelete:  item.IsDelete,
		}
		if !item.IsDelete {
			record.Value = json.RawMessage(item.Value)
		}
		records = append(records, record)
	}
	return records, nil
}`}</pre>
              </div>
            </div>

            {/* main.go & Declarative Index */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <span className="font-bold text-neutral-900 font-mono text-xs block">4. Entrypoint: main.go</span>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                  <pre>{`package main

import (
	"log"
	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func main() {
	chaincode, err := contractapi.NewChaincode(new(SupplyChainContract))
	if err != nil {
		log.Panicf("Error creating supplychain chaincode: %v", err)
	}
	if err := chaincode.Start(); err != nil {
		log.Panicf("Error starting chaincode: %v", err)
	}
}`}</pre>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-neutral-900 font-mono text-xs block">5. CouchDB Index: productStatus.json</span>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                  <pre>{`{
  "index": {
    "fields": [
      "docType",
      "status"
    ]
  },
  "ddoc": "productStatusIndex",
  "name": "productStatusIndex",
  "type": "json"
}`}</pre>
                </div>
              </div>
            </div>

            {/* Network Deployment & CLI Verification Guide */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">6. Step-by-Step Test-Network CLI Commands</h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step A: Start Fabric Test Network with CAs &amp; CouchDB</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>./network.sh up createChannel -ca -c supplychannel -s couchdb</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step B: Deploy Go Chaincode with AND Endorsement Policy</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>./network.sh deployCC -ccn supplychain -ccp ../chaincode/supplychain -ccl go -c supplychannel -ccv 1.0 -ccs 1 -ccep &quot;AND(&apos;Org1MSP.peer&apos;,&apos;Org2MSP.peer&apos;)&quot;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step C: Load CLI Environment Variables</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>export PATH=$&#123;PWD&#125;/../bin:$PATH &amp;&amp; export FABRIC_CFG_PATH=$&#123;PWD&#125;/../config/ &amp;&amp; . ./scripts/envVar.sh &amp;&amp; setGlobals 1</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step D: Register Product P-1001 as Org1 (Manufacturer)</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;CreateProduct&quot;,&quot;Args&quot;:[&quot;P-1001&quot;,&quot;Laptop&quot;,&quot;BATCH-2026-01&quot;,&quot;Pune, India&quot;]&#125;&apos;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step E: Propose Custody Transfer to Org2MSP</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;TransferCustody&quot;,&quot;Args&quot;:[&quot;P-1001&quot;,&quot;Org2MSP&quot;]&#125;&apos;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step F: Accept Custody Transfer as Org2 (Distributor)</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>setGlobals 2 &amp;&amp; peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;AcceptCustodyTransfer&quot;,&quot;Args&quot;:[&quot;P-1001&quot;]&#125;&apos;</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Validation Matrix */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">7. Comprehensive Testing &amp; Security Validation Matrix (12 Scenarios)</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-2.5">#</th>
                      <th className="p-2.5">Test Scenario</th>
                      <th className="p-2.5">Acting Entity</th>
                      <th className="p-2.5">Invoked Function</th>
                      <th className="p-2.5">Expected Verification Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-2.5 font-bold">1</td>
                      <td className="p-2.5">Valid Registration</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Manufacturer)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1001&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (Status: CREATED, Owner: Org1MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">2</td>
                      <td className="p-2.5">Unauthorized Registration</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Distributor)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1002&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only the manufacturer can create products&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">3</td>
                      <td className="p-2.5">Duplicate Registration</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Manufacturer)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1001&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;product already exists&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">4</td>
                      <td className="p-2.5">Valid Lifecycle Transition</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;PACKED&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (Status updated to PACKED)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">5</td>
                      <td className="p-2.5">Illegal Lifecycle Jump</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;DELIVERED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;invalid product status transition&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">6</td>
                      <td className="p-2.5">Unauthorized Status Update</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Non-Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;SHIPPED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only current holding organization can update&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">7</td>
                      <td className="p-2.5">Valid Custody Handshake 1</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">TransferCustody(&quot;Org2MSP&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (PendingOwnerMSP set to Org2MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">8</td>
                      <td className="p-2.5">Self-Acceptance Bypass</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Proposer)</td>
                      <td className="p-2.5 text-amber-800">AcceptCustodyTransfer()</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only designated receiving org can accept&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">9</td>
                      <td className="p-2.5">Valid Custody Handshake 2</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Designee)</td>
                      <td className="p-2.5 text-amber-800">AcceptCustodyTransfer()</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (OwnerMSP transferred to Org2MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">10</td>
                      <td className="p-2.5">Unauthorized Recall</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Distributor)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;RECALLED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only the manufacturer can recall products&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">11</td>
                      <td className="p-2.5">Missing Endorsement</td>
                      <td className="p-2.5 text-neutral-800">Org1 Peer Only</td>
                      <td className="p-2.5 text-amber-800">Single peer invoke</td>
                      <td className="p-2.5 text-red-600 font-bold">Commit Revert (&quot;ENDORSEMENT_POLICY_FAILURE&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">12</td>
                      <td className="p-2.5">CouchDB Rich Query</td>
                      <td className="p-2.5 text-neutral-800">Any Channel Peer</td>
                      <td className="p-2.5 text-amber-800">GetProductsByStatus(&quot;SHIPPED&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Returns JSON array filtered by indexed status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 Advanced Assignments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">8. Six Advanced Practical Engineering Assignments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 1: Multi-Organization Logistics Consortium</div>
                  <p className="text-neutral-600">Onboard Org3 (Logistics Provider) into the channel. Deploy an endorsement policy requiring OutOf(2, Org1, Org2, Org3) for transit status updates.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 2: Pharmaceutical DSCSA Verification</div>
                  <p className="text-neutral-600">Extend `Product` struct to store manufacturing lot numbers, expiration timestamps, cold-chain temperature thresholds, and automated batch recall flags.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 3: Private Commercial Collections</div>
                  <p className="text-neutral-600">Implement `collections_config.json` defining `collectionManufacturerDistributor`. Verify that Org3 cannot read wholesale pricing plaintext while confirming ledger hash.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 4: High-Availability Fabric Administration</div>
                  <p className="text-neutral-600">Configure a 3-node Raft ordering cluster. Simulate stopping the leader node and verify that followers elect a new leader without transaction loss.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 5: Real-Time Telemetry &amp; PostgreSQL Pipeline</div>
                  <p className="text-neutral-600">Build a Node.js Fabric Gateway listener subscribing to `ProductStatusChanged` events and syncing historical state changes into an external PostgreSQL dashboard.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 6: Comprehensive Security &amp; MVCC Audit</div>
                  <p className="text-neutral-600">Conduct penetration testing against concurrent updates to trigger MVCC conflicts. Audit chaincode against Go map iteration and unauthorized attribute escalation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 19.B: 5 Numerical Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.B</span>
              <span>•</span>
              <span>MATHEMATICAL DERIVATIONS &amp; SIZING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.B Five Numerical Enterprise Systems &amp; Consensus Sizing Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for enterprise blockchain architects. Expand each accordion to inspect variables, formulas, derivations, and solutions.
            </p>

            <div className="space-y-4">
              {NUMERICAL_PROBLEMS.map((problem, idx) => {
                const isOpen = openProblemIndex === idx;
                return (
                  <div key={problem.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenProblemIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                          Problem {idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900 mt-0.5">{problem.title}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div className="p-4 rounded-xl bg-white border border-neutral-200">
                          <strong className="text-neutral-900 block mb-1">Problem Statement:</strong>
                          <p className="text-neutral-700 leading-relaxed">{problem.question}</p>
                        </div>

                        <div className="space-y-1">
                          <strong className="text-neutral-900 block">Given Variables:</strong>
                          <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                            {problem.variables.map((v, i) => (
                              <li key={i}>{v}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <strong className="text-neutral-900 block">Step-by-Step Derivation:</strong>
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-neutral-900 text-neutral-200">
                            {problem.steps.map((st, i) => (
                              <div key={i}>{st}</div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">
                          Final Result: {problem.finalAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Answer Key Summary Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">Official Numerical Answer Key</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Problem</th>
                      <th className="p-3">Target Metric</th>
                      <th className="p-3">Exact Derived Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    {NUMERICAL_PROBLEMS.map((prob) => (
                      <tr key={prob.id}>
                        <td className="p-3 font-bold text-neutral-900">{prob.title}</td>
                        <td className="p-3 text-neutral-600">{prob.variables[0]}</td>
                        <td className="p-3 font-bold text-amber-900">{prob.finalAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    '''

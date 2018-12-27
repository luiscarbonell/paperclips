//==============================
// Before AutoClippers =========
//==============================
window.funds += 100

//==============================
// Before Projects =============
//==============================

let WirePurchaserI = setInterval(function() {
  window.funds += parseFloat(document.querySelector("#wireCost").innerHTML.split(",").join(""));
  window.buyWire()
}, 100)

let PriceRaiserI = setInterval(function() {
  window.raisePrice()
}, 100)

let AutoClipperPurchaserI = setInterval(function() {
  window.funds += parseFloat(document.querySelector("#clipperCost").innerHTML.split(",").join(""));
  window.makeClipper()
}, 100)

let MarketingLevelIncreaserI = setInterval(function() {
  window.funds += parseFloat(document.querySelector("#adCost").innerHTML.split(",").join(""));
  window.buyAds()
}, 100)

//==============================
// Projects ====================
//==============================

let MemoryIncreaserI = setInterval(function() {
  window.addMem()
}, 100)

let ProcessorIncreaserI = setInterval(function() {
  window.addProc()
}, 100)

//==============================
// MegaClippers ================
//==============================

let MegaClipperPurchaserI = setInterval(function() {
  window.funds += parseFloat(document.querySelector("#megaClipperCost").innerHTML.split(",").join(""));
  window.makeMegaClipper()
}, 100)

//==============================
// Hypnodrones =================
//==============================

let SolarFarmPurchaserI = setInterval(function() {
  if(parseFloat(document.querySelector("#powerConsumptionRate").innerHTML.split(",").join("")) >
     parseFloat(document.querySelector("#powerProductionRate").innerHTML.split(",").join(""))) {
    window.makeFarm(100)
  }
}, 100)

let DronePurchaserI = setInterval(function() {
  if(window.availableMatter > 0 && parseFloat(document.querySelector("#powerConsumptionRate").innerHTML.split(",").join("")) <=
     parseFloat(document.querySelector("#powerProductionRate").innerHTML.split(",").join(""))) {
    window.makeHarvester(1000)
    window.makeWireDrone(1000)
  }
}, 100)

//==============================
// Von Neumann Probes ==========
//==============================

window.yomi += 100000000000000000
window.maxTrust += 100000000000000
maxTrustDisplayElement.innerHTML = formatWithCommas(maxTrust)

let ProbeLauncherI = setInterval(function() {
  window.makeProbe()
}, 100)

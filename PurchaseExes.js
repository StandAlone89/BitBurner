/** @param {NS} ns */
export async function main(ns) {
	var grey = "\u001b[30m"
	var red = "\u001b[31m"
	var green = "\u001b[32m"
	var yellow = "\u001b[33m"
	var blue = "\u001b[34m"
	var pink = "\u001b[35m"
	var cyan = "\u001b[36m"
	var white = "\u001b[37m"
	var bold = "\u001b[1m"
	var italics = "\u001b[3m"
	var underline = "\u001b[4m"



	if (ns.singularity.isBusy() == false) {
		ns.singularity.universityCourse("rothman university", "Computer Science", false)
	}

	if (ns.singularity.exportGameBonus() == true) {
		ns.singularity.exportGame()
	}

	if (ns.hasTorRouter() == false && ns.getServerMoneyAvailable("home") > 200000) {
		ns.singularity.purchaseTor(),
			ns.tprint(red + ">>> Tor Router Purchased <<<")
	}


	if (ns.getServerMoneyAvailable("home") >= 500000 && ns.fileExists("BruteSSH.exe") == false) {
		ns.singularity.purchaseProgram("BruteSSH.exe")
		ns.tprint(red + ">>> BruteSSh Purchaced <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 500000 && ns.fileExists("DeepScanV1.exe") == false) {
		ns.singularity.purchaseProgram("DeepScanV1.exe")
		ns.tprint(red + ">>> DeepscanV1 Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 500000 && ns.fileExists("ServerProfiler.exe") == false) {
		ns.singularity.purchaseProgram("ServerProfiler.exe")
		ns.tprint(red + ">>> ServerProfiler Purchased <<<")
	}

	if (ns.getServerMoneyAvailable("home") >= 1000000 && ns.fileExists("Autolink.exe") == false) {
		ns.singularity.purchaseProgram("Autolink.exe")
		ns.tprint(red + ">>> Autolink Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 1500000 && ns.fileExists("FTPCrack.exe") == false) {
		ns.singularity.purchaseProgram("FTPCrack.exe")
		ns.tprint(red + ">>> FTPCrack Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 5000000 && ns.fileExists("relaySMTP.exe") == false) {
		ns.singularity.purchaseProgram("relaySMTP.exe")
		ns.tprint(red + ">>> relaySMTP Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 25000000 && ns.fileExists("DeepScanV2.exe") == false) {
		ns.singularity.purchaseProgram("DeepScanV2.exe")
		ns.tprint(red + ">>> DeepScanV2 Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 30000000 && ns.fileExists("HTTPWorm.exe") == false) {
		ns.singularity.purchaseProgram("HTTPWorm.exe")
		ns.tprint(red + ">>> HTTPWorm Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= 250000000 && ns.fileExists("SQLInject.exe") == false) {
		ns.singularity.purchaseProgram("SQLInject.exe")
		ns.tprint(red + ">>> SQLInject Purchased <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= ns.singularity.getUpgradeHomeRamCost()) {
		ns.singularity.upgradeHomeRam(),
			ns.tprint(red + ">>> Home RAM Upgraded <<<")
	}
	if (ns.getServerMoneyAvailable("home") >= ns.singularity.getUpgradeHomeCoresCost()) {
		ns.singularity.upgradeHomeCores(),
			ns.tprint(red + ">>> Home Cores Upgraded <<<")
	}
}

// To execute this program you must input three arguements: 
// Arg1 - Where to start the scan from.
// Arg2 - The size of the server to buy (if you have the money).  
// Arg2 note - To run the remote hack the size must be between 3-20.
// Arg3 - The amount of additinal threads to run remote hack from home server.


/** @param {NS} ns */
export async function main(ns) {
	//ns.disableLog("ALL")
	// Global Variants
	var serverList = ns.scan("home")
	var serverSize = (Math.pow(2, ns.args[0]))
	var target
	var serverPrice = (ns.getPurchasedServerCost(serverSize))
	var pServers = (ns.getPurchasedServers)
	var pMoney = (ns.getServerMoneyAvailable("home"))
	var maxThreads = Math.floor(ns.getServerMaxRam("home") / 2.4)
	var hl = [0, 0, 0, 0]
	var scanLevel = 2
	var count = 0
	var serverCount = [serverList.length, 0]
	var possibleThreads = Math.floor(ns.getServerMaxRam("home") / 2.4)
	var inner = 0
	var approvedList = []
	var exeCount = 0
	var linked
	var depth = 0
	var checked = 0
	var files = ("HackTemplate.js")
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
	var remoteHackList = []
	var hackedList = []   //Spider program W.I.P or "SPW"
	var unHackedList = []  //SPW
	var noMoneyList = []
	var hackable = []

	// The next few lines are purely for info and cosmetics.
	ns.tprint(underline + "Last size argument: ", white + " ", ns.args[0])
	ns.tprint(underline + "Last threads argument: ", white + " ", ns.args[1])
	ns.tprint(italics + "Current wallet balance: ", blue + "$", ns.formatNumber(pMoney))
	ns.tprint(italics + white + ns.getPurchasedServers().length, "/25 Purchased servers.")
	ns.tprint(italics + pink + "Cost to purchace ", white + ns.formatRam(serverSize), " server - ", red + "$", ns.formatNumber(serverPrice))
	ns.tprint(italics + pink + "Purchased server can run: ", Math.ceil(serverSize / 2.40), " threads. ")
	// Sets the "hl" variable depending on what programs you have unlocked.
	if (ns.fileExists("BruteSSH.exe", "home")) { hl[0] = 1; exeCount++ }
	if (ns.fileExists("FTPCrack.exe", "home")) { hl[1] = 1; exeCount++ }
	if (ns.fileExists("relaySMTP.exe", "home")) { hl[2] = 1; exeCount++ }
	if (ns.fileExists("HTTPWorm.exe", "home",)) { hl[3] = 1; exeCount++ }
	if (ns.fileExists("SQLInject.exe", "home")) { hl[4] = 1; exeCount++ }
	if (ns.fileExists("DeepScanV1.exe", "home")) { scanLevel += 2 }
	if (ns.fileExists("DeepScanV2.exe", "home")) { scanLevel += 5 }


	while (true) {
		if (ns.fileExists("BruteSSH.exe") && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel("CSEC")) && ns.hasRootAccess("CSEC") == false) {
			ns.exec("opendoor.script", "home", 1, "CSEC")
		}
		if (ns.fileExists("FTPCrack.exe") && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel("avmnite-02h")) && ns.hasRootAccess("avmnite-02h") == false) {
			ns.exec("opendoor.script", "home", 1, "avmnite-02h")
		}
		if (ns.fileExists("relaySMTP.exe") && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel("I.I.I.I")) && ns.hasRootAccess("I.I.I.I") == false) {
			ns.exec("opendoor.script", "home", 1, "I.I.I.I")
		}
		if (ns.fileExists("HTTPWorm.exe") && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel("run4theh111z")) && ns.hasRootAccess("run4theh111z") == false) {
			ns.exec("opendoor.script", "home", 1, "run4theh111z")
		}
		if (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel("w0r1d_d43m0n")) {
			ns.exec("opendoor.script", "home", 1, "w0r1d_d43m0n")
		}
		if (ns.scriptRunning("HUD.js", "home") == false && ns.getServerMaxRam("home") >= 128) {
			ns.exec("HUD.js", "home")
		}
		if (exeCount <= 5) {
			ns.exec("PurchaseExes.js", "home")
		}
		if (scanLevel < 9) {
			ns.exec("PurchaseExes.js", "home")
		}

		// Hackloop start.
		ns.print(">>>>>> Scan Results <<<<<<\n > " + serverList.join("\n > ") + "\n>>>>>> Scan Limit: Level - " + [scanLevel + 1] + " <<<<<<")
		while (count <= serverCount[depth] - 1 && depth < scanLevel) {
			linked = ns.scan(serverList[checked]); checked++;
			for (let i = 0; i <= linked.length - 1; i++) { // Cycles through the list.
				target = linked[i]; // Sets the target one at a time.
				if (target != "home" && !serverList.includes(target) && !serverList.includes(pServers)) {
					serverList.push(target),
						hackable.push(target)
					ns.print("Scan level " + [depth + 2] + " > " + target); serverCount[depth + 1]++;

				}
			}
			if (count == serverCount[depth] - 1) { count = 0; depth++; serverCount.push(0) } else { count++ }
		}

		ns.print(red + "****Hacking****");
		for (let i = 0; i <= serverList.length - 1; i++) {  // Runs once for each entry on list.
			target = serverList[i];

			if (ns.getServerNumPortsRequired(target) > exeCount) {
				ns.print(red + ">X< Lacks Software for: " + target)
				unHackedList.push(target)
			} // Denied because you lack the EXE.

			else if ((ns.getServerMaxMoney(target) == 0)) {
				ns.print(red + ">x< No Money: " + target)
				unHackedList.push(target)
				noMoneyList.push
			} // Denied because the server has no money

			// Purchase Server Section
			else if ((ns.getServerMaxRam(target) < 2 && (ns.getServerMaxMoney(target) > 0))) {
				if (hl[0]) { ns.brutessh(target) }
				if (hl[1]) { ns.ftpcrack(target) }
				if (hl[2]) { ns.relaysmtp(target) }
				if (hl[3]) { ns.httpworm(target) }
				if (hl[4]) { ns.sqlinject(target) }
				if (exeCount >= ns.getServerNumPortsRequired(target) && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(target))) {
					ns.nuke(target)
				}
				if ((ns.serverExists((target) + "-Server") == false) && ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(target)) {
					ns.print(white + (target) + "-Server", " is available for purchase.")
					ns.print(italics + "Cost to purchase ", (target) + "-Server ", red + ns.formatNumber(serverPrice))
					ns.print(italics + "Current wallet balance: ", blue + "$ ", ns.formatNumber(ns.getServerMoneyAvailable("home")))

					if ((ns.getServerMoneyAvailable("home")) > (serverPrice)) {
						ns.purchaseServer((target) + "-Server", (serverSize)),
							ns.tprint(blue + (target) + "-Server", " Purchased for - ", red + "$ ", ns.formatNumber(serverPrice)),
							ns.scp(("RemoteHack.script"), ((target) + "-Server")),
							ns.exec(("RemoteHack.script"), ((target) + "-Server"), (Math.floor(ns.getServerMaxRam((target) + "-Server") / 2.40)), target)
						hackedList.push(target)
					}
				}
			} // End of Server purchase section.
			else if (ns.serverExists((target) + "-Server") == true) {
				ns.print(red + (target) + "-Server", " Already purchased.")
			}
			else if (ns.getHackingLevel() < ns.getServerRequiredHackingLevel(target)) {
				ns.print(red + ">X< Lack of hacking Skill")
				unHackedList.push(target)
			}
			else if (ns.scriptRunning("HackTemplate.js", (target)) == 1) {
				ns.print(red + ">X< Already running on server - ", target)
				hackedList.push(target)
			}
			else {
				if (hl[0]) { ns.brutessh(target) }
				if (hl[1]) { ns.ftpcrack(target) }
				if (hl[2]) { ns.relaysmtp(target) }
				if (hl[3]) { ns.httpworm(target) }
				if (hl[4]) { ns.sqlinject(target) }
				var ram = ns.getServerMaxRam(target)
				var threads = Math.floor(ram / 2.45)
				if (exeCount >= ns.getServerNumPortsRequired(target) && (ns.getHackingLevel() >= ns.getServerRequiredHackingLevel(target))) {
					ns.nuke(target),
						ns.scp(files, target),
						ns.exec("HackTemplate.js", target, Math.floor(ns.getServerMaxRam(target) / 2.4), target),
						ns.tprint(white + "Script running on ", threads, " threads on: ", red + target),
						hackedList.push(target)
				}
			}
			if (hackedList.includes(target) & target != "home" & !remoteHackList.includes(target)) {
				ns.exec("RemoteHack.script", "home", ns.args[1], target)
				remoteHackList.push(target),
					ns.tprint(cyan + "Remote Hack ", white + "running on: ", red + target),
					ns.tprint(white + "Thread Count: ", red + ns.args[1])
			}
		}
		await ns.sleep(5000)
	}
} 

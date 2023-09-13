/** @param {NS} ns */
export async function main(ns) {

	var red = "\u001b[31m"
	var underline = "\u001b[4m"
	var target = []
	var i = []

	//Sector-12 Augments 
	if (!ns.singularity.getOwnedAugmentations().includes("Neuralstimulator") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Neuralstimulator") &&
		(ns.singularity.getAugmentationRepReq("Neuralstimulator") <= ns.singularity.getFactionRep("Sector-12"))) {
		ns.singularity.purchaseAugmentation("Sector-12", "Neuralstimulator"),
			ns.tprint(red + ">>> Neuralstimulator Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("CashRoot Starter Kit") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("CashRoot Starter Kit") &&
		ns.singularity.getFactionRep("Sector-12") >= ns.singularity.getAugmentationRepReq("CashRoot Starter Kit")) {
		ns.singularity.purchaseAugmentation("Sector-12", "CashRoot Starter Kit"),
			ns.tprint(red + ">>> CashRoot Starter Kit Purchased <<<")
	}
	//Cyber-Sec
	if (!ns.singularity.getOwnedAugmentations().includes("Neurotrainer I") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Neurotrainer I") &&
		ns.singularity.getFactionRep("CyberSec") >= ns.singularity.getAugmentationRepReq("Neurotrainer I")) {
		ns.singularity.purchaseAugmentation("CyberSec", "Neurotrainer I"),
			ns.tprint(red + ">>> Neurotrainer I Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("BitWire") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("BitWire") &&
		ns.singularity.getFactionRep("CyberSec") >= ns.singularity.getAugmentationRepReq("BitWire")) {
		ns.singularity.purchaseAugmentation("CyberSec", "BitWire"),
			ns.tprint(red + ">>> BitWire Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Synaptic Enhancement Implant") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Synaptic Enhancement Implant") &&
		ns.singularity.getFactionRep("CyberSec") >= ns.singularity.getAugmentationRepReq("Synaptic Enhancement Implant")) {
		ns.singularity.purchaseAugmentation("CyberSec", "Synaptic Enhancement Implant"),
			ns.tprint(red + ">>> Synaptic Enhancement Implant Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Cranial Signal Processors - Gen I") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen I") &&
		ns.singularity.getFactionRep("CyberSec") >= ns.singularity.getAugmentationRepReq("Cranial Signal Processors - Gen I")) {
		ns.singularity.purchaseAugmentation("CyberSec", "Cranial Signal Processors - Gen I"),
			ns.tprint(red + ">>> Cranial Signal Processors - Gen I Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Cranial Signal Processors - Gen II") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen II") &&
		ns.singularity.getFactionRep("CyberSec") >= ns.singularity.getAugmentationRepReq("Cranial Signal Processors - Gen II")) {
		ns.singularity.purchaseAugmentation("CyberSec", "Cranial Signal Processors - Gen II"),
			ns.tprint(red + ">>> Cranial Signal Processors - Gen II Purchased <<<")
	}
	//NiteSec
	if (!ns.singularity.getOwnedAugmentations().includes("Cranial Signal Processors - Gen III") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen III") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationRepReq("Cranial Signal Processors - Gen III")) {
		ns.singularity.purchaseAugmentation("NiteSec", "Cranial Signal Processors - Gen III"),
			ns.tprint(red + ">>> Cranial Signal Processors - Gen III Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Artificial Synaptic Potentiation") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Artificial Synaptic Potentiation") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationRepReq("Artificial Synaptic Potentiation")) {
		ns.singularity.purchaseAugmentation("NiteSec", "Artificial Synaptic Potentiation"),
			ns.tprint(red + ">>> Artificial Synaptic Potentiation Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Neural-Retention Enhancement") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Neural-Retention Enhancement") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationPrice("Neural-Retention Enhancement")) {
		ns.singularity.purchaseAugmentation("NiteSec", "Neural-Retention Enhancement"),
			ns.tprint(red + ">>> Neural-Retention Enhancement Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("DataJack") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("DataJack") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationRepReq("DataJack")) {
		ns.singularity.purchaseAugmentation("NiteSec", "DataJack"),
			ns.tprint(red + ">>> DataJack Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Embedded Netburner Module") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Embedded Netburner Module") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationRepReq("Embedded Netburner Module")) {
		ns.singularity.purchaseAugmentation("NiteSec", "Embedded Netburner Module"),
			ns.tprint(red + ">>> Embedded Netburner Module Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("CRTX42-AA Gene Modification") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("CRTX42-AA Gene Modification") &&
		ns.singularity.getFactionRep("NiteSec") >= ns.singularity.getAugmentationRepReq("CRTX42-AA Gene Modification")) {
		ns.singularity.purchaseAugmentation("NiteSec", "CRTX42-AA Gene Modification"),
			ns.tprint(red + ">>> CRTX42-AA Gene Modification Purchased <<<")
	}
	//The Black Hand
	if (!ns.singularity.getOwnedAugmentations().includes("Cranial Signal Processors - Gen IV") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen IV") &&
		ns.singularity.getFactionRep("The Black Hand") >= ns.singularity.getAugmentationRepReq("Cranial Signal Processors - Gen IV")) {
		ns.singularity.purchaseAugmentation("The Black Hand", "Cranial Signal Processors - Gen IV"),
			ns.tprint(red + ">>> Cranial Signal Processors - Gen IV Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("The Black Hand") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("The Black Hand") &&
		ns.singularity.getFactionRep("The Black Hand") >= ns.singularity.getAugmentationRepReq("The Black Hand")) {
		ns.singularity.purchaseAugmentation("The Black Hand", "The Black Hand"),
			ns.tprint(red + ">>> Enhanced Myelin Sheathing Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Enhanced Myelin Sheathing") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Enhanced Myelin Sheathing") &&
		ns.singularity.getFactionRep("The Black Hand") >= ns.singularity.getAugmentationRepReq("Enhanced Myelin Sheathing")) {
		ns.singularity.purchaseAugmentation("The Black Hand", "Enhanced Myelin Sheathing"),
			ns.tprint(red + ">>> Enhanced Myelin Sheathing Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Embedded Netburner Module Core Implant") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Embedded Netburner Module Core Implant") &&
		ns.singularity.getFactionRep("The Black Hand") >= ns.singularity.getAugmentationRepReq("Embedded Netburner Module Core Implant")) {
		ns.singularity.purchaseAugmentation("The Black Hand", "Embedded Netburner Module Core Implant"),
			ns.tprint(red + ">>> Embedded Netburner Module Core Implant Purchased <<<")
	}
	//BitRunners
	if (!ns.singularity.getOwnedAugmentations().includes("Cranial Signal Processors - Gen V") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen V") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("Cranial Signal Processors - Gen V")) {
		ns.singularity.purchaseAugmentation("BitRunners", "Cranial Signal Processors - Gen V"),
			ns.tprint(red + ">>> Cranial Signal Processors - Gen V Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("BitRunners Neurolink") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("BitRunners Neurolink") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("BitRunners Neurolink")) {
		ns.singularity.purchaseAugmentation("BitRunners", "BitRunners Neurolink"),
			ns.tprint(red + ">>> BitRunners Neurolink Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Neural Accelerator") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Neural Accelerator") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("Neural Accelerator")) {
		ns.singularity.purchaseAugmentation("BitRunners", "Neural Accelerator"),
			ns.tprint(red + ">>> Neural Accelerator Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Artificial Bio-neural Network Implant") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Artificial Bio-neural Network Implant") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("Artificial Bio-neural Network Implant")) {
		ns.singularity.purchaseAugmentation("BitRunners", "Artificial Bio-neural Network Implant"),
			ns.tprint(red + ">>> Artificial Bio-neural Network Implant Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Embedded Netburner Module Core Implant") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Embedded Netburner Module Core Implant") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("Embedded Netburner Module Core Implant")) {
		ns.singularity.purchaseAugmentation("BitRunners", "Embedded Netburner Module Core Implant"),
			ns.tprint(red + ">>> Embedded Netburner Module Core Implant Purchased <<<")
	}
	if (!ns.singularity.getOwnedAugmentations().includes("Embedded Netburner Module Core V2 Upgrade") && ns.getServerMoneyAvailable("home") >= ns.singularity.getAugmentationPrice("Embedded Netburner Module Core V2 Upgrade") &&
		ns.singularity.getFactionRep("BitRunners") >= ns.singularity.getAugmentationRepReq("Embedded Netburner Module Core V2 Upgrade")) {
		ns.singularity.purchaseAugmentation("BitRunners", "Embedded Netburner Module Core V2 Upgrade"),
			ns.tprint(red + ">>> Embedded Netburner Module Core V2 Upgrade Purchased <<<")
	}
}

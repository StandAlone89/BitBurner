var target = args[0]; // Execute with target varable named in the JS.
var moneyThresh = getServerMaxMoney(target) * 0.99;

// Defines the maximum security level the target server can have.
// If the target's security level is higher than this, the script
// will execute a weaken command before doing anything else.
var securityThresh = getServerMinSecurityLevel(target) + 5;

// Loop that hacks/grows/weakens the target server

while(true) {
	if (getServerSecurityLevel(target) > securityThresh) {
		weaken(target);
	} else if (getServerMoneyAvailable(target) < moneyThresh) {
		grow(target);
	} else {
		hack(target);
	}
}

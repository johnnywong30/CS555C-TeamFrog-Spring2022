module.exports = {
	checkStr(str) {
		if (!str) throw "string does not exist";
		if (typeof str !== "string") throw "input is not a string";
		const trimmed = str.trim();
		if (trimmed.length < 1) throw "input cannot be empty string";
		return trimmed;
	},
	checkNum(num) {
		if (!num) throw "number does not exist";
		if (typeof int !== "number") throw "input is not a number";
		return num;
	},
};

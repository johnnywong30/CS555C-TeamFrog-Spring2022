const express = require("express");
const { MongoCursorInUseError } = require("mongodb");
const router = express.Router();
const users = require("../data/users");
const validate = require("../misc/validate");

router.route("/updateFirstName").post(async (req, res) => {
	try {
		const { email, firstName } = req.body;
		const user = await users.updateFirstName(email, firstName);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/updateMoney").post(async (req, res) => {
	try {
		const { email, money } = req.body;
		const user = await users.updateMoney(email, money);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updateLastName").post(async (req, res) => {
	try {
		const { email, lastName } = req.body;
		const user = await users.updateLastName(email, lastName);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/updateCompany").post(async (req, res) => {
	try {
		const { email, company } = req.body;
		const user = await users.updateCompany(email, company);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/updateFriendsList").post(async (req, res) => {
	try {
		const { email, friendEmail } = req.body;
		const user = await users.updateFriendsList(email, friendEmail);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/removeFriend").post(async (req, res) => {
	try {
		const { email, friendEmail } = req.body;
		const user = await users.removeFriend(email, friendEmail);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updateMeasurement").post(async (req, res) => {
	try {
		const { email, measurement } = req.body;
		const user = await users.updateMeasurement(email, measurement);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/getOwnedFrogs/:email").get(async (req, res) => {
	try {
		const email = req.params.email;
		const userInfo = await users.getUser(email);
		res.json(userInfo[0].ownedFrogs).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/purchaseFrog").post(async (req, res) => {
	try {
		const { email, frogName } = req.body;
		const user = await users.purchaseFrog(email, frogName);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/addTitle").post(async (req, res) => {
	try {
		const { email, title } = req.body;
		const user = await users.addTitle(email, title);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updateTitle").post(async (req, res) => {
	try {
		const { email, titleIndex } = req.body;
		const user = await users.updateTitle(email, titleIndex);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updateFrog").post(async (req, res) => {
	try {
		const { email, frogId } = req.body;
		const user = await users.updateFrog(email, frogId);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updateFrogName").post(async (req, res) => {
	try {
		const { email, frogId, newName } = req.body;
		const user = await users.updateFrogName(email, frogId, newName);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/updatePrestige").post(async (req, res) => {
	try {
		const { email } = req.body;
		const user = await users.updatePrestige(email);
		res.json(user).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/getLatestWaterTime/:email").get(async (req, res) => {
	try {
		const email = req.params.email;
		const userInfo = await users.getUser(email);
		if (userInfo[0].waterHistory.length === 0) {
			res.json("None").end();
		} else {
			let time = userInfo[0].waterHistory;
			time = time[time.length - 1];
			time = time.timestamp.replace(/,/g, "");
			res.json(time).end();
		}
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
// TODO: the rest of the update routes

module.exports = router;

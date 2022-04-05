const express = require("express");
const router = express.Router();
const frogs = require("../data/frogs");

router.route("/updateFrogName").post(async (req, res) => {
	try {
		const { name, newName } = req.body;
		const frog = await frogs.updateFrogName(name, newName);
		res.json(frog).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/updateFrogLink").post(async (req, res) => {
	try {
		const { name, newLink } = req.body;
		const frog = await frogs.updateFrogLink(name, newLink);
		res.json(frog).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/createFrog").post(async (req, res) => {
	try {
		const { frogId, name, url } = req.body;
		const frog = await frogs.createFrog(frogId, name, url);
		res.json(frog).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/getFrogLink/:id").get(async (req, res) => {
	try {
		const link = await frogs.getFrogLink(req.params.id);
		return res.json(link);
	} catch (e) {
		return res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/getFrogUrls").get(async (req, res) => {
	try {
		const links = await frogs.getFrogUrls();
		return res.json(links);
	} catch (e) {
		return res.status(200).json({ errorMsg: e }).end();
	}
});
router.route("/getFrogs").get(async (req, res) => {
	try {
		const frogList = await frogs.getFrogs();
		return res.json(frogList);
	} catch (e) {
		return res.status(200).json({ errorMsg: e }).end();
	}
});
module.exports = router;

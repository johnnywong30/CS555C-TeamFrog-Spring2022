const express = require("express");
const router = express.Router();
const water = require("../data/water");
const moment = require("moment");

router.route("/add").post(async (req, res) => {
	try {
		const { email, amount } = req.body;
		const time = moment().format("YYYY-MM-DD, h:mm:ss a");
		const waterData = { timestamp: time, amount: amount };
		const response = await water.insertWater(email, waterData);
		res.status(200).json(response).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/get/:email/:id").get(async (req, res) => {
	try {
		const email = req.params.email;
		const id = req.params.id;
		const data = await water.getWater(email, id);
		res.status(200).json(data).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/getAll/:email").get(async (req, res) => {
	try {
		const email = req.params.email;
		const data = await water.getAllWater(email);
		res.status(200).json(data).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/getDaily/:email").get(async (req, res) => {
	try {
		const email = req.params.email;
		const data = await water.getDaily(email);
		res.status(200).json(data).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

router.route("/delete/").post(async (req, res) => {
	try {
		const { email, id } = req.body;
		const response = await water.deleteWater(email, id);
		res.status(200).json(response).end();
	} catch (e) {
		console.log(e);
		res.statusMessage = e;
		res.status(200).json({ errorMsg: e }).end();
	}
});

module.exports = router;

const express = require('express');
const router = express.Router();
const frogs = require('../data/frogs')

router
    .route('/updateFrogName')
    .post(async (req, res) => {
        try {
            const { name, newName } = req.body
            const frog = await frogs.updateFrogName(name, newName)
            res.json(frog).end()
        } catch(e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e}).end()
        }
    })
router
    .route('/updateFrogLink')
    .post(async (req, res) => {
        try {
            const { name, newLink } = req.body
            const frog = await frogs.updateFrogLink(name, newLink)
            res.json(frog).end()
        } catch(e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e}).end()
        }
    })

router
    .route('/createFrog')
    .post(async (req, res) => {
        try {
            const { name, link } = req.body
            const frog = await frogs.createFrog(name, link)
            res.json(frog).end()
        } catch(e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e}).end()
        }
    })
module.exports = router;
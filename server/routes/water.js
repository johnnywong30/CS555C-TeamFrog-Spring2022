const express = require('express');
const router = express.Router();
const users = require('../data/users')

router
    .route('/addWater')
    .post(async (req, res) => {
        try {
            const { email, water } = req.body
            // res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

module.exports = router;
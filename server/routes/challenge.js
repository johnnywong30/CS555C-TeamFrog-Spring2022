const express = require('express');
const router = express.Router();
const users = require('../data/users')

router
    .route('/updateChallenges')
    .post(async (req, res) => {
        try {
            const { email, challenge } = req.body
            const user = await users.updateChallenges(email, challenge)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })
// TODO: the rest of the update routes

module.exports = router;
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
router
    .route('/updateCompletedChallenges')
    .post(async (req, res) => {
        try {
            const { email, completedChallenge } = req.body
            console.log(completedChallenge);
            const user = await users.updateCompletedChallenges(email, completedChallenge)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

module.exports = router;
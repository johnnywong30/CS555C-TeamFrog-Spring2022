const express = require('express');
const router = express.Router();
const users = require('../data/users')

router
    .route('/updateFirstName')
    .post(async (req, res) => {
        try {
            const { email, firstName } = req.body
            const user = await users.updateFirstName(email, firstName)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

router
    .route('/updateLastName')
    .post(async (req, res) => {
        try {
            const { email, lastName } = req.body
            const user = await users.updateLastName(email, lastName)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })
router
    .route('/updateCompany')
    .post(async (req, res) => {
        try {
            const { email, company } = req.body
            const user = await users.updateCompany(email, company)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

// TODO: the rest of the update routes

module.exports = router;
const express = require('express');
const router = express.Router();
const axios = require('axios')
const users = require('../data/users')

router
    .route('/login')
    .post(async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await users.validateUser(email, password)
            res.json(user)
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({errorMsg: e})
        }
    })

router
    .route('/register')
    .post(async (req, res) => {
        try {
            const { firstName, lastName, email, password, company } = req.body
            const user = await users.createUser(firstName, lastName, email, password, company)
            res.status(200).json(user)
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({errorMsg: e})
        }
    })



module.exports = router;
const express = require('express');
const router = express.Router();
const axios = require('axios')
const cookieParser = require('cookie-parser')
const users = require('../data/users')

router
    .route('/login')
    .post(async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await users.validateUser(email, password)
            // TODO use cookies to store authentication session
            // res.cookie("auth", user)
            res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
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
            res.status(200).json({ errorMsg: e }).end()
        }
    })

router
    .route('/logout')
    .post(async (req, res) => {
        try {
            // res.clearCookie("auth").end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

router
    .route('/')
    .get(async (req, res) => {
        try {

        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })



module.exports = router;
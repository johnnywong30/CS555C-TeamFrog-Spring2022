const express = require('express');
const router = express.Router();
const axios = require('axios')
const cookieParser = require('cookie-parser')
const users = require('../data/users')

router
    .route('/login')
    .post(async (req, res) => {
        try {
            let user;
            if (req.session.user) {
                const { email, password } = req.session.user
                user = await users.validateUser(email, password)
            }
            else {
                const { email, password } = req.body
                user = await users.validateUser(email, password)
                // not secure but whatever for the project
                req.session.user = {
                    email: email,
                    password: password
                }
            }
            return res.json(user).end()
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

router
    .route('/register')
    .post(async (req, res) => {
        if (req.session.user) return res.redirect('/login')
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
        console.log('hi')
        console.log(req.session)
        try {
            if (req.session.user) {
                req.session.destroy()
            }
            res.status(200).json()
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
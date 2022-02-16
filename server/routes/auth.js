const express = require('express');
const router = express.Router();
const axios = require('axios')

router
    .route('/')
    .get(async (req, res) => {
        try {
            // const data = await getPeople()
            // res.json(data)
        } catch (e) {
            res.status(500).send({message: e});
        }
    })

router
    .route('/:id')
    .get(async (req, res) => {
        try {
            // const person = checkId(req.params.id, data)
            // res.json(person)
        } catch (e) {
            res.status(404).json({message: e});
        }
    })



module.exports = router;
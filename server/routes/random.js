const express = require('express');
const router = express.Router();
const randomFrog = require('random-frog');

router
    .route('/randomFrog')
    .get(async (req, res) => {
        try {
            let frogImg = await randomFrog();
            let frogHash = frogImg.hash;
            let frogUrl = "https://i.imgur.com/" + frogHash + ".jpg";
            res.json(frogUrl).end();
        } catch (e) {
            console.log(e)
            res.statusMessage = e
            res.status(200).json({ errorMsg: e }).end()
        }
    })

module.exports = router;
const express = require('express');
const app = express();
const { users, assets } = require('./data');


app.get('/', (req, res) => {
    res.send("<h1>API Docs</h1><a href='https://github.com/tnbCrow/Crypto-Profile-Dot-Link#api-endpoints'>Docs</a>")
})


app.get('/api/users/:username', (req, res) => {
    const { username } = req.params;
    const singleUser = users.find(
        (user) => user.username === username
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    return res.json(singleUser)
})


app.get('/api/assets', (req, res) => {
    return res.json(assets)
})


app.post('/api/addresses', (req, res) => {

    return res.json({
        uuid: "d6ef8ce9-d833-416a-82cd-161c0c518510",
        asset: {
            uuid: "bbf7a4f5-e78b-4176-aae8-5dad11ec7b95",
            name: "Bitcoin",
            symbol: "btc",
            logo_url: "url_of_logo.com",
            requires_metadata: false,
            token_info_url: "coingecko.com"
        },
        address: "bitcoin_address",
        metadata: null
    })
})


app.listen(3000, () => {
    console.log("express listening on port 3000...")
})

module.exports = app;
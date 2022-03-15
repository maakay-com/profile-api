const express = require('express');
const app = express();
const morgan = require('morgan')
const addressRouter = require('./routes/address');
const assetRouter = require('./routes/asset');
const userRouter = require('./routes/user')


app.use(morgan('tiny'))
app.use('/api/address', addressRouter)
app.use('/api/assets', assetRouter)
app.use('/api/users', userRouter)


app.get('/', (req, res) => {
    res.send("<h1>API Docs</h1><a href='https://github.com/tnbCrow/Crypto-Profile-Dot-Link#api-endpoints'>Docs</a>")
})


app.listen(3000, () => {
    console.log("express listening on port 3000...")
})

module.exports = app;
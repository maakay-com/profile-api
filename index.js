const express = require('express');
const app = express();
const morgan = require('morgan')
const addressRouter = require('./routes/address');
const tokenRouter = require('./routes/token');
const userRouter = require('./routes/user')
const profileRouter = require('./routes/profile')
const socialProfileRouter = require('./routes/social_profile')
const profileLinksRouter = require('./routes/profile_link')


app.use(morgan('tiny'))
app.use('/api/v1/address', addressRouter)
app.use('/api/v1/token', tokenRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/profile', profileRouter)
app.use('/api/v1/social_profile', socialProfileRouter)
app.use('/api/v1/profile_link', profileLinksRouter)


app.get('/', (req, res) => {
    res.send("<h1>API Docs</h1><a href='https://github.com/tnbCrow/Crypto-Profile-Dot-Link#api-endpoints'>Docs</a>")
})


app.listen(3000, () => {
    console.log("express listening on port 3000...")
})

module.exports = app;
const express = require('express');
const app = express();
const { users } = require('./data');


app.get('/', (req, res) => {
    res.send("<h1>API Docs</h1><a href='/api/users'>Users</a>")
})


app.get('/api/users/:username', (req, res) => {
    const { username } = req.params;
    const singleUser = users.find(
        (user) => user.username === username
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    res.json(singleUser)
})


app.listen(3000, () => {
    console.log("express listening on port 3000...")
})

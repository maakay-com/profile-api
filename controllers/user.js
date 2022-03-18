const { users } = require('../data')
const User = require('../models/User')


const getOrCreateUser = async (req, res) => {

    try{

        const account_number = req.body.account_number;

        const userExists = await User.findOne({ account_number: account_number });
    
        if (!userExists) {
            const user = await User.create(req.body)
            return res.json(user)
    
        } else {
            return res.json(userExists)
        }

    } catch (err) {
        return res.json(err)
    }
}

module.exports = { getOrCreateUser }

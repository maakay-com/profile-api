const { Account } = require('@commandokoala/thenewboston')


const verifySignature = async (account_number, message, signature) => {

    if (Account.verifySignature(message, signature, account_number)) {
        return true
    }

    return false
}

module.exports = { verifySignature }

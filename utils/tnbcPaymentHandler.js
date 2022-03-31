require("dotenv").config();

const scanTNBCPayment = async () => {
    console.log("Scan tnbc chain here..");
}

const checkConfirmation = () => {
    console.log("check for the confirmation of transaction here..");
}

const upgradeUser = () => {
    console.log("upgrade the user if the payment is confirmed and matches..");
}

module.exports = {
    scanTNBCPayment,
    checkConfirmation,
    upgradeUser
}

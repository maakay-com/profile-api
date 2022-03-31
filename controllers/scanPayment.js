const { scanTNBCPayment, checkConfirmation, upgradeUser } = require("../utils/tnbcPaymentHandler")

const scanPayment = async (req, res) => {
    console.log("Scan Payment function run..")
    scanTNBCPayment();
    checkConfirmation();
    upgradeUser();
    res.json("hello")
}

module.exports = { scanPayment }

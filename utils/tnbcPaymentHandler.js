require("dotenv").config();
const axios = require('axios');
const Payment = require("../models/Payment");

const scanTNBCPayment = async () => {
    try {
        const response = await axios.get('http://54.183.16.194/bank_transactions?recipient=22d0f0047b572a6acb6615f7aae646b0b96ddc58bfd54ed2775f885baeba3d6a');
        if ( response.status === 200 ) {

            for (let i = 0; i < response.data.results.length; i++) {
                let transaction = response.data.results[i]

                let transactionExists = await Payment.exists({ transactionHash: transaction.block.signature })

                if (!transactionExists) {
                    await Payment.create({
                        accountNumber: transaction.block.sender,
                        amount: transaction.amount,
                        transactionId: transaction.id,
                        transactionHash: transaction.block.signature,
                        metadata: transaction.memo
                    })
                }
              }
        }
      } catch (error) {
        console.error(error);
      }
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

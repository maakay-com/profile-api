require("dotenv").config();
const axios = require('axios');
const Transaction = require("../models/Transaction");

const scanTNBCTransaction = async () => {
    try {
        const response = await axios.get('http://54.183.16.194/bank_transactions?recipient=22d0f0047b572a6acb6615f7aae646b0b96ddc58bfd54ed2775f885baeba3d6a');
        if ( response.status === 200 ) {

            for (let i = 0; i < response.data.results.length; i++) {
                let transaction = response.data.results[i]

                let transactionExists = await Transaction.exists({ transactionHash: transaction.block.signature })

                if (!transactionExists) {
                    await Transaction.create({
                        accountNumber: transaction.block.sender,
                        amount: transaction.amount,
                        transactionId: transaction.block.id,
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

const checkConfirmation = async () => {
    try {
        const unconfirmedTransactions = await Transaction.find({ confirmationStatus: "WAITING_CONFIRMATION" })
        for (let i = 0; i < unconfirmedTransactions.length; i++) {
            let unconfirmedTransaction = unconfirmedTransactions[i]
            console.log(unconfirmedTransaction.transactionId)
            let transactionConfirmationResponse = await axios({
                method: "GET",
                url: `http://54.183.16.194/confirmation_blocks?block=${unconfirmedTransaction.transactionId}`,
                validateStatus: () => true,
            })
            if ( transactionConfirmationResponse.status == 200 ) {
                if ( transactionConfirmationResponse.data.count > 0 ) {
                    unconfirmedTransaction.confirmationStatus = "CONFIRMED"
                    unconfirmedTransaction.save()
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const upgradeUser = () => {
    console.log("upgrade the user if the Transaction is confirmed and matches..");
}

module.exports = {
    scanTNBCTransaction,
    checkConfirmation,
    upgradeUser
}

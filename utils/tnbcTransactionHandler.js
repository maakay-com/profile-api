require("dotenv").config();
const axios = require("axios");
const Transaction = require("../models/Transaction");

const scanTNBCTransaction = async () => {
  try {
    const response = await axios.get(
      "http://45.56.92.194/bank_transactions?recipient=22d0f0047b572a6acb6615f7aae646b0b96ddc58bfd54ed2775f885baeba3d6a"
    );
    if (response.status === 200) {
      for (let i = 0; i < response.data.results.length; i++) {
        let transaction = response.data.results[i];

        let transactionExists = await Transaction.exists({
          transactionHash: transaction.block.signature,
        });

        if (!transactionExists) {
          await Transaction.create({
            accountNumber: transaction.block.sender,
            amount: transaction.amount,
            transactionId: transaction.block.id,
            transactionHash: transaction.block.signature,
            metadata: transaction.memo,
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const checkConfirmation = async () => {
  try {
    var scanTransactionUntil = new Date();
    scanTransactionUntil.setDate(scanTransactionUntil.getDate() - 7);

    const unconfirmedTransactions = await Transaction.find({
      confirmationStatus: "WAITING_CONFIRMATION",
      createdAt: {
        $gte: scanTransactionUntil,
      },
    });
    for (let i = 0; i < unconfirmedTransactions.length; i++) {
      let unconfirmedTransaction = unconfirmedTransactions[i];
      let transactionConfirmationResponse = await axios({
        method: "GET",
        url: `http://45.56.92.194/confirmation_blocks?block__signature=${unconfirmedTransaction.transactionHash}`,
        validateStatus: () => true,
      });
      if (transactionConfirmationResponse.status == 200) {
        if (transactionConfirmationResponse.data.count > 0) {
          unconfirmedTransaction.confirmationStatus = "CONFIRMED";
          unconfirmedTransaction.save();
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const upgradeUser = async () => {
  const confirmedTransactions = await Transaction.find({
    confirmationStatus: "CONFIRMED",
    transactionStatus: "NEW",
  });
  for (let i = 0; i < confirmedTransactions.length; i++) {
    let confirmedTransaction = confirmedTransactions[i];
    console.log(confirmedTransaction);
  }
};

module.exports = {
  scanTNBCTransaction,
  checkConfirmation,
  upgradeUser,
};

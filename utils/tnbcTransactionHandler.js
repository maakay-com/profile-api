const axios = require("axios");
const Transaction = require("../models/Transaction");
const { GOLD_TIER_FEE } = require("../constants");
const Profile = require("../models/Profile");

const scanTNBCTransaction = async () => {
  try {
    const response = await axios.get(
      `http://${process.env.BANK_URL}/bank_transactions?recipient=${process.env.TNBC_ACCOUNT_NUMBER}`
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
        url: `http://${process.env.BANK_URL}/confirmation_blocks?block__signature=${unconfirmedTransaction.transactionHash}`,
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

const processPayment = async () => {
  const confirmedTransactions = await Transaction.find({
    confirmationStatus: "CONFIRMED",
    transactionStatus: "NEW",
  });
  for (let i = 0; i < confirmedTransactions.length; i++) {
    let confirmedTransaction = confirmedTransactions[i];
    const parsedMetadata = confirmedTransaction.metadata.split("_");

    if (parsedMetadata[0] == "upgradesub" && parsedMetadata.length >= 3) {
      const uid = parsedMetadata[1];
      const tier = parsedMetadata[2];

      if (tier === "GOLD") {
        if (confirmedTransaction.amount >= GOLD_TIER_FEE) {
          const profileExists = await Profile.exists({ uid: uid });

          if (profileExists) {
            const profile = await Profile.findOne({ uid: uid });
            profile.subscriptionType = "GOLD";
            await profile.save();

            confirmedTransaction.transactionStatus = "IDENTIFIED";
            confirmedTransaction.save();
          }
        }
      }
    } else {
      confirmedTransaction.transactionStatus = "UNIDENTIFIED";
      confirmedTransaction.save();
    }
  }
};

module.exports = {
  scanTNBCTransaction,
  checkConfirmation,
  processPayment,
};

const { address } = require("../data");
const Address = require("../models/Address");

const getAllAddress = async (req, res) => {
  try {
    const user_id = req.user._id;
    const addresses = await Address.find({ user: user_id });
    return res.json(addresses);
  } catch (err) {
    return res.json(err);
  }
};

const getAddress = (req, res) => {
  return res.json(address);
};

const createAddress = async (req, res) => {
  try {
    req.body.user = req.user._id;
    const address = await Address.create(req.body);
    return res.json(address);
  } catch (err) {
    return res.json(err);
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);

    if (address.user == req.user._id) {
      const { address } = req.body;
      const newAddress = await Address.findOneAndUpdate(
        { _id: id },
        { address },
        { new: true }
      );
      return res.json(newAddress);
    } else {
      return res.json({
        errors: {},
        _message: "Unauthorized",
        name: "AuthorizationError",
        message: "Unauthorized: User is not authorized to perform this action.",
      });
    }
  } catch (err) {
    return res.json(err);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);

    if (address.user == req.user._id) {
      await address.remove();
      return res.json({
        errors: {},
        _message: "Address Deleted Successfully",
        name: "Success",
        message: "Address Deleted Successfully.",
      });
    } else {
      return res.json({
        errors: {},
        _message: "Unauthorized",
        name: "AuthorizationError",
        message: "Unauthorized: User is not authorized to perform this action.",
      });
    }
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  getAllAddress,
  createAddress,
  updateAddress,
  deleteAddress,
  getAddress,
};

const { profile_links } = require("../data");
const ProfileLink = require("../models/ProfileLink");

const getAllProfileLink = async (req, res) => {
  try {
    const user_id = req.user._id;
    const profileLinks = await ProfileLink.find({ user: user_id }).lean();
    return res.json(profileLinks);
  } catch (err) {
    return res.json(err);
  }
};

const getProfileLink = async (req, res) => {
  try {
    const { id } = req.params;
    const profileLink = await ProfileLink.findById(id).lean();
    if (profileLink.user == req.user._id) {
      return res.json(profileLink);
    } else {
      return res.json({
        errors: {},
        _message: "Unauthorized",
        name: "AuthorizationError",
        message: "Unauthorized: User is not authorized to perform this action.",
      });
    }
  } catch (err) {
    res.json(err);
  }
};

const createProfileLink = async (req, res) => {
  try {
    req.body.user = req.user._id;
    const profileLink = await ProfileLink.create(req.body);
    return res.json(profileLink);
  } catch (err) {
    res.json(err);
  }
};

const updateProfileLink = async (req, res) => {
  try {
    const { id } = req.params;
    const profileLink = await ProfileLink.findById(id).lean();

    if (profileLink.user == req.user._id) {
      const { title, url } = req.body;
      const newProfileLink = await ProfileLink.findOneAndUpdate(
        { _id: id },
        { title, url },
        {
          new: true,
          runValidators: true,
        }
      );
      return res.json(newProfileLink);
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

const deleteProfileLink = async (req, res) => {
  try {
    const { id } = req.params;
    const profileLink = await ProfileLink.findById(id);

    if (profileLink.user == req.user._id) {
      await profileLink.remove();
      return res.json({
        errors: {},
        _message: "Profile Link Deleted Successfully",
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
  getAllProfileLink,
  getProfileLink,
  createProfileLink,
  updateProfileLink,
  deleteProfileLink,
};

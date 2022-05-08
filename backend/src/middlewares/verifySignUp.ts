import { db, Profiles, User } from "../database/models";

export const checkDuplicateEmail = (req, res, next) => {
  console.log("Checking duplicate email");
  console.log(req.body);
  // Username
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(user => {
    if (user) {
      console.log("Sending failed bc email in use");
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }
    console.log("Email not in use");
    next();
  });
};

export const checkDuplicateName = (req, res, next) => {
  console.log("Checking duplicate user Name");
  console.log(req.body);
  // Username
  Profiles.findOne({
    where: {
      name: req.body.name,
    },
  }).then(profile => {
    if (profile) {
      console.log("Sending failed bc Name in use");
      res.status(400).send({
        message: "Failed! Name is already in use!",
      });
      return;
    }
    console.log("Name not in use");
    next();
  });
};
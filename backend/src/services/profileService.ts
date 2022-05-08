import { db, Profiles } from "../database/models";

export function createProfile(req, res) {

  const name = req.body.name;
  const url = req.body.url;
  console.log(`in createProfile with ${name}:${url}`);
  Profiles.create({ name, url })
    .then(() => {
      console.log("Created single profile");
      res.status(200).json({ message: "Created profile successfully" });
    })
    .catch((err) => {
      console.log('failed to create profile');
      console.log(err);
      res.status(500).json({ message: err });
    });

}
import "dotenv/config";
import { Sequelize, DataTypes } from "sequelize";
import { db, Profiles, User } from "./models";


const userSeedData = [
  { email: "test@gmail.com", password: "123456" },
  { email: "test2@email.com", password: "passwordw" },
];

const profileSeedData = [
  { name: "Spock", url: "https://test.com/test01"},
  { name: "Jolly", url: "https://test.com/test02"},
];



const seed = async () => {
  console.log("Beginning seed");

  // force true will drop the table if it already exists
  // such that every time we run seed, we start completely fresh
  await User.sync({ force: true });

  //homework 3... 
  await Profiles.sync({ force: true })

  console.log('Tables have synced!');

  //homework 3...
  await Profiles.bulkCreate(profileSeedData, { validate: true })
    .then(() => {
      console.log('Profiles created');
    }).catch((err) => {
      console.log('failed to create seed profiles');
      console.log(err);
    });

  //homework 3...
  await Profiles.create({ name: "Amoni", url: "https://test.com/test03" })
    .then(() => {
      console.log('Created single seed profiles')
    })
    .catch((err) => {
      console.log('failed to create seed profiles');
      console.log(err);
    });

  await User.bulkCreate(userSeedData, { validate: true })
    .then(() => {
      console.log('Users created');
    }).catch((err) => {
      console.log('failed to create seed users');
      console.log(err);
    });
  
  await User.create({ email: "athirdemail@aol.com", password: "123456" })
    .then(() => {
      console.log("Created single user");
    })
    .catch((err) => {
      console.log('failed to create seed users');
      console.log(err);
    })
    .finally(() => {
      db.close();
    });
};

seed();

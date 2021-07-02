const db = require('./connection');
const { User, Goal } = require('../models');

db.once('open', async () => {
  await Goal.deleteMany();

  await Goal.insertMany([
    { language: 'Javascript',
      goalHours: 25,
      progressHours: 14,
      goalGreated: "2021-06-18T16:00:00Z",
    },
    { language: 'Python',
      goalHours: 30,
      progressHours: 2,
      goalGreated: "2021-06-18T16:00:00Z",
    },
    { language: 'Node.JS',
    goalHours: 5,
    progressHours: 1,
    goalGreated: "2021-06-18T16:00:00Z",
    },
  ]);

  console.log('goals seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'foo',
    lastName: 'bo',
    email: 'foo@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});

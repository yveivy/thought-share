const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});


  await User.insertMany(users);


  await Thought.insertMany(thoughts);



  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

// {
// 	"users": [
// 		{
// 			"_id": "647cadb5a73b426dd0ec1a08",
// 			"username": "ameliabedilia",
// 			"email": "imtooliteral@gmail.com",
// 			"thoughts": [],
// 			"friends": [],
// 			"__v": 0,
// 			"friendCount": 0
// 		},
// 		{
// 			"_id": "647cadb5a73b426dd0ec1a09",
// 			"username": "harrietwelsch",
// 			"email": "ispy@gmail.com",
// 			"thoughts": [],
// 			"friends": [],
// 			"__v": 0,
// 			"friendCount": 0
// 		},
// 		{
// 			"_id": "647cadb5a73b426dd0ec1a0a",
// 			"username": "nancydrew",
// 			"email": "crackthecase@gmail.com",
// 			"thoughts": [],
// 			"friends": [],
// 			"__v": 0,
// 			"friendCount": 0
// 		}
// 	]
// }

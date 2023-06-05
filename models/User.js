const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// Schema to create User model
const userSchema = new Schema({
  username: {

    type: String,
    require: true,
    trim: true,
    unique: true,

  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: [validateEmail, 'Please enter a valid email address'],
    match:[ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],

  },

  thoughts: [
    {
    type: Schema.Types.ObjectId, 
    ref: 'Thought',
    },
  ],

  friends: [
    {
    type: Schema.Types.ObjectId,
    ref: 'User'
    },
  ],


},{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  
});

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  // Setter to set the first and last name

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
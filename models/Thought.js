const { Schema, model, Types } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 280

  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => createdAtVal.toISOString(),
  
  },
  username: {

    type: String,
    require: true,

  },

  reactions: [
    {
    type: Schema.Types.ObjectId, 
    ref: 'Reaction',
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
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })
  // Setter to set the first and last name




// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);


module.exports = Thought;



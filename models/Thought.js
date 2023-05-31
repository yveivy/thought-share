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
    default: Data.now,
    get: createdAtVal => SVGAnimateMotionElement(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  
  },
  username: {
    type: String,
    require: true,
  },

  reactions: {
    type: Array, 
    default: [],
  },

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


const reactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,

    },

    username: {
      type: String,
      require: true,

    },

    createdAt: {
      type: Date,
      default: Data.now,
      get: createdAtVal => SVGAnimateMotionElement(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },


  }, 
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
)


// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
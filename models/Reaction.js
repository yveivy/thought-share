const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema (
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
  
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
  
      },
  
      username: {
        type: String,
        require: true,
  
      },
  
      createdAt: {
        type: Date,
        default: Date.now,
        // get: createdAtVal => SVGAnimateMotionElement(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
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

  const Reaction = model('Reaction', reactionSchema);
  module.exports = Reaction;
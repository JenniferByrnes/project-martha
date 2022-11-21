const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    thoughtTitle: {
      type: String,
      required: 'This post needs a title',
      minlength: 1
    },
    thoughtImage: {
      type: String,
      minlength: 1
    },
    thoughtText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

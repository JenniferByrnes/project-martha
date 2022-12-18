//const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    blogPostTitle: {
      type: String,
      required: 'This post needs a title',
      minlength: 1
    },
    blogPostImage: {
      type: String,
      minlength: 1
    },
    blogPostText: {
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

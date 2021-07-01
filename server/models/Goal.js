const mongoose = require('mongoose');

const { Schema } = mongoose;

const goalSchema = new Schema({
    language: {
        type: String,
        trim: true,
      },
      goalHours: {
        type: Number,
        trim: true,
      },
      progressHours: {
        type: Number,
        trim: true,
      },
      goalCreated: {
        type: Date,
        default: Date.now
      }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: "First name is Required",
    trim: true,
  },
  lastName: {
    type: String,
    required: "Last name is Required",
    trim: true,
  },
  email: {
    type: String,
    required: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref:"Goal"
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
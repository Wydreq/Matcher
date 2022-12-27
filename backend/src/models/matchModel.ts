export {}

const mongoose = require('mongoose')

const { Schema } = mongoose

const matchSchema = new Schema(
  {
    userOne: {
      type: String,
      required: true,
    },
    userTwo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Match', matchSchema)

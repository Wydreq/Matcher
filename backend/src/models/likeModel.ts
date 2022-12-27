export {}

const mongoose = require('mongoose')

const { Schema } = mongoose

const likeSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    targetId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Like', likeSchema)

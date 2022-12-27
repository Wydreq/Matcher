import { Request, Response } from 'express'
const Like = require('../models/likeModel')
const User = require('../models/userModel')
const Match = require('../models/matchModel')
const ErrorHandler = require('../tools/errorHandler')

exports.randomPeople = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const user = req.user
  const { city } = req.query

  try {
    let matchedUser = await User.aggregate([
      { $match: { city } },
      { $match: { username: { $not: { $regex: user.username } } } },
      { $sample: { size: 1 } },
    ])

    if (!matchedUser) {
      return next(new ErrorHandler('User not found', 404))
    }
    res.status(200).json({ success: true, message: matchedUser })
  } catch (err: any) {
    next(new ErrorHandler(err, 500))
  }
}
exports.like = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const { userId, targetId } = req.body

  let hasMatch = false

  try {
    const targetUser = await User.findById(targetId)

    if (!targetUser) {
      return next(new ErrorHandler('User nout found', 404))
    }
    const isLiked = await Like.findOne({ targetId, userId })

    if (isLiked) {
      return next(new ErrorHandler('This user is already liked', 400))
    }
    const like = new Like({ userId, targetId })
    await like.save()

    const isMatch = await Like.findOne({ userId: targetId, targetId: userId })

    if (isMatch) {
      const isMatched = await Match.findOne({
        $or: [
          { userOne: userId, userTwo: targetId },
          { userOne: targetId, userTwo: userId },
        ],
      })

      if (!isMatched) {
        const match = new Match({
          userOne: userId,
          userTwo: targetId,
        })
        await match.save()
        hasMatch = true
      } else {
        return next(new ErrorHandler('You are matched already!', 400))
      }
    }

    res
      .status(200)
      .json({ success: true, message: 'Liked successfully', hasMatch })
  } catch (err) {
    next(new ErrorHandler(err, 500))
  }
}
exports.getAllMatches = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const { userId } = req.query

  try {
    const matches = await Match.find({
      $or: [{ userOne: userId }, { userTwo: userId }],
    })
    const matchedUserIds = matches.map((match) => {
      return match.userOne === userId ? match.userTwo : match.userOne
    })
    const matcherUsers = await Promise.all(
      matchedUserIds.map((id) => {
        return User.findById(id)
      })
    )

    res.status(200).json({ success: true, message: matcherUsers })
  } catch (err) {
    next(new ErrorHandler(err, 500))
  }
}

import { Request, Response } from 'express'
const User = require('../models/userModel')
const ErrorHandler = require('../tools/errorHandler')

exports.randomPeople = async (
  req: Request & { user: any },
  res: Response,
  next: Function
) => {
  const user = req.user
  const { city } = req.body

  try {
    const matchedUser = await User.aggregate([
      { $match: { city } },
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

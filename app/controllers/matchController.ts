import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  requestError,
  requestStart,
  requestSuccess,
  updateUser,
} from '../redux/userSlice'
import { server } from '../tools/server'

export const getPerson = async (
  accessToken: string,
  dispatch: Dispatch,
  city: string
) => {
  dispatch(requestStart())
  try {
    const res = await axios.get(server() + '/matches/', {
      params: {
        accessToken,
        city,
      },
    })
    dispatch(requestSuccess())

    return res.data
  } catch (err: any) {
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}
export const likePerson = async (
  accessToken: string,
  dispatch: Dispatch,
  targetId: string
) => {
  dispatch(requestStart())
  try {
    const res = await axios.post(
      server() + '/matches/like',
      { targetId },
      { params: { accessToken } }
    )
    dispatch(requestSuccess())

    return res.data
  } catch (err: any) {
    if (err.hasOwnProperty('response')) return err.response.data
    else return { sucess: false, message: err }
  }
}

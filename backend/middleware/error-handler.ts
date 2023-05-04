import express from "express"
import CustomAPIError from '../errors/custom-error'
const errorHandlerMiddleware = (err: { statusCode: number; message: any }, req:express.Request, res:express.Response, next:express.NextFunction) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).send('Something went wrong try again later')
}

export default errorHandlerMiddleware

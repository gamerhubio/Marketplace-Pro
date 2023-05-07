import express from "express"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"

 const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null)res.status(StatusCodes.UNAUTHORIZED).json({msg: "Unauthorized user"})
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.status(StatusCodes.FORBIDDEN).json({ msg: "Invalid token" })
        // @ts-ignore
        req.user = user
        next()
     })
}

export default authMiddleware
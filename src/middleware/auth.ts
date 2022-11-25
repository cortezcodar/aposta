import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";




export async function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction

) {
    const { authorization } = req.headers;


    if (!authorization) {

        return res.status(400).json({ Error: " token not  provided " })


    }

    const [, token] = authorization.split(" ");



    try {
        const decoded: any = verify(token, process.env.JWT_PASS);





        next()

    } catch (error) {


        return res.status(400).json({ Error: " token invalid" })
    }



}
import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from "express";

export function tokenAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader: any = req.headers.authorization

    if(!authHeader) return res.status(401).send({message: "Credenciais inválidas"})

    const token: any = authHeader.split(' ')[1]
    const JWT_SECRET: any = process.env.JWT_SECRET

    try{
        const decoded: any = jwt.verify(token, JWT_SECRET)
        req.user = decoded;

        console.log("TOKEN DECODED: ", decoded)
        return next();
    } catch(error: any) {
        console.log("ERROR TOKEN: ", error.message)
        res.status(401).send({message: error.message})
    }
}
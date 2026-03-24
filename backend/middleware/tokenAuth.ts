import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from "express";

export function tokenAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.['authorization']

    if(!authHeader) return res.sendStatus(401).send({message: "Credenciais inválidas"})

    const token: any = authHeader.split(' ')[1]
    const JWT_SECRET: any = process.env.JWT_SECRET

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;
        next();
    } catch(error: any) {
        res.status(403).send({message: error.message})
    }
}
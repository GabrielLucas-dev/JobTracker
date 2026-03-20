import type { Request, Response } from "express";
import * as userService from '../service/userService.ts'


export async function createUser(req: Request, res: Response) {
    const user = userService.createUser({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })

    return res.status(201).json(user)
}

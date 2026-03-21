import type { Request, Response } from "express";
import * as userService from '../service/userService.ts'


export async function createUser(req: Request, res: Response) {
    try{
    const user = await userService.createUser({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })

    return res.status(201).json(user)
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
}

export async function getUsers(req: Request, res: Response) {
    try{
        const users = await userService.getUsers()
        return res.status(200).json(users)
    } catch (error: any) {
        return res.status(400).send({error: error.message})
    }
}

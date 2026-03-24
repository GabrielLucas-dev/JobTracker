import type { Users } from '../model/users.js'
import * as userRepository from '../repository/userRepository.ts'
import bcrypt from 'bcrypt';

export async function createUser(data: any) {
    if(!data) throw new Error("dados inexistentes!")
    
    const doubleEmail = await userRepository.findUserEmail(data.email)
    if(doubleEmail && doubleEmail.length > 0){
        throw new Error("Email já registrado no banco de dados!") 
    }
    
    const hashSenha = await bcrypt.hash(data.senha, 6)
    data.senha = hashSenha;
    
    const user = await userRepository.postUser(data)
    return user

}

export async function getUsers(): Promise<Users[]> {
    const users = await userRepository.findUsers()
    if(!users) console.log('Não há usuarios')
    
    return users   
}

export async function getLogin(email: string, senha: string) {
    const users: any = await userRepository.findUserEmail(email)
    
    if(!users) throw new Error("Usuário não econtrado")

    const user = users[0];  //retorna o primeiro usuario (pois só há um usuario por email, ou seja, retornará o usuario que foi buscado)

    const compare: boolean = await bcrypt.compare(senha, user.senha)
    if(!compare) throw new Error('Senha incorreta!')

    return user    
}
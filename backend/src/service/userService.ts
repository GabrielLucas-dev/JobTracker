import type { Users } from '../model/users.js'
import * as userRepository from '../repository/userRepository.ts'

export async function createUser(data: any) {
    if(!data) throw new Error("dados inexistentes!")
    
    const doubleEmail = await userRepository.findUserEmail(data.email)
    if(doubleEmail && doubleEmail.length > 0){
        throw new Error("Email já registrado no banco de dados!") 
    }
    else{
        const user = await userRepository.postUser(data)
        return user
    }

}

export async function getUsers(): Promise<Users[]> {
    const users = await userRepository.findUsers()
    if(!users) console.log('Não há usuarios')
    
    return users   
}
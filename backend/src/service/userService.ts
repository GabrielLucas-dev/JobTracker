import * as userRepository from '../repository/userRepository.ts'

export async function createUser(data: any) {
    const user = await userRepository.postUser(data)
    if(!data) throw new Error("dados inexistentes!")

    return user
}
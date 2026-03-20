import type { Users } from "../model/users.js";
import { db } from "../config/db_conn.js";

export async function postUser(users: any) {
    const sql = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)"
    const values = [
        users.nome, 
        users.email,
        users.senha
    ]

    const [result] = await db.query(sql, values)
    return result;
}

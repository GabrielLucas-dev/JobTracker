import { error } from "node:console";
import { db } from "../config/db_conn.ts";
import type { Users } from "../model/users.ts";

export async function postUser(users: any) {
  const sql = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";
  const values = [users.nome, users.email, users.senha];

  const [result] = await db.query(sql, values);
  return result;
}

export async function findUsers(): Promise<Users[]> {
  const sql = "SELECT * FROM users";
  const [rows] = await db.query(sql);
  return rows as Users[];
}

findUsers()
  .then((result) => {
    return result;
  })
  .catch((error) => console.log(error));

export async function findUserEmail(email: string): Promise<Users[]> {
  const sql = "SELECT * FROM users WHERE email = ?";
  const [result] = await db.query(sql, [email]);
  return result;
}

findUserEmail()
  .then((result) => {
    return result;
  })
  .catch((error) => console.log(error));

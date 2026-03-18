import { db } from "../config/db_conn.ts";
import type { Candidatura } from "../model/candidatura.ts";

//GET ALL
export async function findCandidaturas(): Promise<Candidatura[]> {
  const sql = "SELECT * FROM candidatura";
  const [rows] = await db.query(sql);
  return rows as Candidatura[];
}

findCandidaturas()
.then((result) => {
    return result
}).catch(error => console.log(error))

//INSERT
export async function createCandidatura(candidatura: any) {
  const sql = 'INSERT INTO candidatura (empresa, data_candidatura, status_candidatura, local_candidatura, observacao) VALUES(?, ?, ?, ?, ?)'
  
  const values = [
    candidatura.empresa,
    candidatura.data_candidatura,
    candidatura.status_candidatura,
    candidatura.local_candidatura,
    candidatura.observacao
  ];
  const [result] = await db.query(sql, values)

  return result;
} 

//DELETE
export async function removeCandidatura(id: number) {
  const sql = "DELETE FROM candidatura WHERE id_candidatura = ?"

  const [result] = await db.query(sql, [id])
  return result; 
}

//PUT
export async function alterCandidatura(candidatura: any , id: number) {
  const sql = `UPDATE candidatura
               SET empresa = ?, data_candidatura = ?, status_candidatura = ?, local_candidatura = ?, observacao = ?
               WHERE id_candidatura = ?`

  const values = [
    candidatura.empresa,
    candidatura.data_candidatura,
    candidatura.status_candidatura,
    candidatura.local_candidatura,
    candidatura.observacao,
  ]

  const [result] = db.query(sql, [...values, id])
  return result
} 

//GET BY ID
export async function findCandidaturaById(id: number) {
    const sql = "SELECT * FROM candidatura WHERE id_candidatura = ?"
    const [result] = await db.query(sql, [id])
    return result[0]
}

findCandidaturaById()
.then((result) => {
  return result
}).catch(error => console.log(error))

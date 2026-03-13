import { db } from "../config/db_conn.ts";
import type { Candidatura } from "../model/candidatura.ts";

export async function findCandidaturas(): Promise<Candidatura[]> {
  const sql = "SELECT * FROM candidatura";
  const [rows] = await db.query(sql);
  return rows as Candidatura[];
}

findCandidaturas()
.then((result) => {
    return result
}).catch(error => console.log(error))

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



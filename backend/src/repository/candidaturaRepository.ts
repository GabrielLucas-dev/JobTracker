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

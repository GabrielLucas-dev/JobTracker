import express from "express";
import cors from "cors";
import candidaturaRoute from './routes/candidaturaRoute.ts'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/candidatura', candidaturaRoute)

const PORT: number = 3030;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

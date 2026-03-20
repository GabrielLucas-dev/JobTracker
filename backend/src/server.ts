import express from "express";
import cors from "cors";
import candidaturaRoute from './routes/candidaturaRoute.ts'
import userRoute from './routes/userRoute.ts'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/candidaturas', candidaturaRoute)
app.use('/users', userRoute)

const PORT: number = 3030;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

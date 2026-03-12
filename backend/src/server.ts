import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    return res.send('typescript okay!')
});

const PORT: number = 3032 
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
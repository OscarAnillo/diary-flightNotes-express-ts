import express  from 'express';
import diaryRouter from './src/routers/diaries';
const app = express();
app.use(express.json());

const PORT = 3005;


app.get("/ping", (_req, res) => {
    res.send('<h1>Pong</h1>');
});
app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
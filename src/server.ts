import express from 'express';
import gradeRoutes from './routes/gradeRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', gradeRoutes);

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

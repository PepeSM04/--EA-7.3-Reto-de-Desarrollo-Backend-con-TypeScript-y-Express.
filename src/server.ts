import express from 'express';
import dotenv from 'dotenv';
import { pool } from './db.js';
import { Neumatico } from './interfaces.js';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <h1>API de Gestión de Neumáticos</h1>
    <p>Consulta el inventario de neumáticos disponibles en el taller.</p>
  `);
});

app.get('/api/datos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM neumaticos');
        const neumaticos = rows as Neumatico[];
        res.json(neumaticos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los neumáticos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
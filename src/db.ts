import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Prueba de conexión inicial
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos establecida con éxito.');
        connection.release();
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
})();
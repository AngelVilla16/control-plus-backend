import 'dotenv';
import mysql from 'mysql2/promise';
import type {Pool} from 'mysql2/promise';

const pool: Pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    port:process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
});

async function prueba(){
    try{
        const connection = pool.getConnection();
        console.log("Conexion con exito");
    }
    catch(error){
        console.log("Error al conectar: ",error);
    }
}

prueba();

export default pool;
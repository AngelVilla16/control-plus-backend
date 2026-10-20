import type {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import pool from '../lib/conexion';

export const login = async (req:Request, res:Response)=>{
    const {correo, contrasena} = req.body;

    if(!correo || !contrasena){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios"});
    }

    try{
        const validar = 'SELECT id_usuario, nombre, correo, contrasena FROM usuarios WHERE correo = ?';
        const [result] = await pool.execute(validar, [correo])

        if((result as any).length === 0){
            return res.status(400).json({mensaje:"Usuario o contraseña incorrectos"});
        }

        const data = (result as any)[0];

        const validarcontrasena = await bcrypt.compare(contrasena, data.contrasena);

        if(!validarcontrasena){
            return res.status(400).json({mensaje:"Usuario o contraseña incorrectos"});
        }

        return res.status(200).json({mensaje:"Inicio de sesión exitoso", nombre: data.nombre, correo: data.correo});
    }
    catch(error:any){
        console.error("Error al iniciar sesión", error);
        return res.status(500).json({mensaje:"Error al iniciar sesión"});
    }
}
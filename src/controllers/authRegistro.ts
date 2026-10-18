import type {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import pool from '../lib/conexion';

export const registro = async (req:Request, res:Response)=>{
    const {nombre, correo, contrasena} = req.body;

    if(!nombre|| !correo || !contrasena){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios."});
    }
    if(contrasena.length < 8){
        return res.status(400).json({mensaje:"La contraseña debe tener un minimo de 8 caracteres"});
    }

    try{
        const validar = 'SELECT correo FROM usuarios WHERE correo = ?';
        const [resultValidar]:any = await pool.query(validar, [correo]); 

        if((resultValidar as any).length>0){
            return res.status(400).json({mensaje:"Este correo ya esta en uso"});
        }
        //Metodo hash para encriptar la contraseña: bcrypt
        const hash = await bcrypt.hash(contrasena, 10);

        //Ahora si registramos el usuario
        
        const query = 'INSERT INTO usuarios(nombre, correo, contrasena) VALUES(?,?,?)';

        const [result] = await pool.query(query, [nombre, correo, hash]);

        return res.status(201).json({mensaje:"Usuario registrado con exito!"});
    }
    catch(error:any){
        console.error("Error al registrar: ", error);

        return res.status(500).json({mensaje:"Error al registrarse"});
    }
}
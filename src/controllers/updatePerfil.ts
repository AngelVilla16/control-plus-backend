import type {Response, Request} from 'express';
import pool from '../lib/conexion';

export const actualizarPerfil = async (req:Request, res:Response) =>{
    const {edad, peso, altura} = req.body;

    if(!edad || !peso || !altura){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios"});
    }

    try{
        const updateperfil = true;
        const queryUpdate = 'UPDATE usuarios SET edad = ?, peso = ?, altura = ?, perfil_completo = ?';
        const [exectQuery]:any = await pool.query(queryUpdate, [edad, peso, altura, updateperfil]);

        return res.status(200).json({mensaje:"Perfil completado con exito"});
    }
    catch(error:any){
        console.error("Error al actualizar los datos del usuario: ", error);
        return res.status(500).json({mensaje:"Error al actualizar los datos del usuario"});
    }

}
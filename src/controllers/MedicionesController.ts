import type { Request, Response } from 'express';
import pool from '../lib/conexion';

export const RegistrarGlucosa = async (req: Request, res: Response) => {
  const { id_usuario, seleccionado, glucosa } = req.body;
  if (!glucosa) {
    return res.status(400).json({ mensaje: "Es necesario registrar un valor." });

  }
  try {
    const registrarglucosa = 'INSERT INTO glucosa(id_usuario, momento, nivel_glucosa) VALUES(?,?,?)';
    const [result]: any = await pool.query(registrarglucosa, [id_usuario, seleccionado, glucosa]);

    return res.status(200).json({ mensaje: 'Registro de glucosa correcto' });
  }
  catch (error: any) {
    console.error('Error al registrar glucosa: ', error);
    return res.status(500).json({ mensaje: 'Error al registrar glucosa' });
  }
};

export const RegistrarPresion = async (req: Request, res: Response) => {
  const { id_usuario, seleccionado, sistolica, diastolica } = req.body;
  console.log('BODY:', req.body)

  if (!sistolica || !diastolica) {
    return res.status(400).json({ mensaje: 'Es necesario registrar un valor.' });
  }
  try {
    const registrarpresion = 'INSERT INTO presion(id_usuario, momento, sistolica, diastolica) VALUES(?,?,?,?)';
    const [result]: any = await pool.query(registrarpresion, [id_usuario, seleccionado, sistolica, diastolica]);

    return res.status(200).json({ mensaje: "Registro de presión correcto" });

  }
  catch (error: any) {
    console.error("Error al registrar presion: ", error);
    return res.status(500).json({ mensaje: "Error al registrar presión" });
  }
}

import cors from 'cors';
import express, {type Application} from 'express';
import loginRoute from './routes/login';
import registroRoute from './routes/registro';

const app:Application = express();

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use('/api/auth', loginRoute);
app.use('/api/auth', registroRoute);

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
});
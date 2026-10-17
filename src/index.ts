import cors from 'cors';
import express, {type Application} from 'express';


const app:Application = express();
app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
});
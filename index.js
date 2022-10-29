import  express  from "express";
import rutas from "./rutas/index.js"
import db from "./config/db.js";
import {relacionHotelGerente, relacionHotelHabitacion} from "./config/relaciones.js"

const app = express();

//Conexion a base de datos
db.authenticate()
.then(() => console.log("Conexion Exitosa"))
.catch(error => console.log(error));

relacionHotelGerente();
relacionHotelHabitacion();

//Definiendo puerto
const port = process.env.PORT || 1800;

//Definiendo pug para plantillas
app.set("view engine", "pug");

//Middleware
app.use((req, res, next) => {
    const ano = new Date();
    res.locals.tiempo = " " + ano.getFullYear();
    return next();
});

app.use(express.urlencoded({extended:true}));

//Definiendo carpeta publica
app.use(express.static("public"));

//Definiendo rutas
app.use("/", rutas)

//Para ver si esta inicializado mi puerto
app.listen(port,()=>{
    console.log(`servidor iniciando en el puerto ` + port);
});
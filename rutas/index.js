import  express  from "express";
import { AgregarGerentes, paginaGerentes } from "../controller/gerentesController.js";
import { paginaHabitaciones } from "../controller/habitacionesController.js";
import { agregarHoteles, paginaHoteles } from "../controller/hotelesController.js";
import { paginaGerente, paginaGestionHabitaciones, paginaGestionHoteles, paginaHotel, paginaInicio } from "../controller/paginasController.js";
const rutas = express.Router();
rutas.get("/", paginaInicio);
rutas.get("/hoteles", paginaHoteles);
rutas.get("/gerentes",paginaGerentes);
rutas.get("/habitaciones", paginaHabitaciones);
rutas.get("/agregar_hoteles", paginaHotel);
rutas.post("/agregar_hoteles", agregarHoteles);
rutas.get("/agregar_gerentes", paginaGerente);
rutas.post("/agregar_gerentes", AgregarGerentes);
rutas.get("/gestion_hoteles", paginaGestionHoteles);
rutas.get("/gestion_habitaciones", paginaGestionHabitaciones);

export default rutas;
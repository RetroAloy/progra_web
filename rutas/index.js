import  express  from "express";
import { eliminarGerentes, guardarGerentes, modificarGerentes, paginaGerentes } from "../controller/gerentesController.js";
import { eliminarHabitaciones, guardarHabitaciones, modificarHabitaciones, paginaGestionHabitaciones, paginaHabitaciones } from "../controller/habitacionesController.js";
import { agregarHoteles, eliminarHoteles, modificarHoteles, mostrarHoteles, paginaGestionHoteles } from "../controller/hotelesController.js";
import { paginaGerente, paginaGestionGerentes, paginaHotel, paginaInicio } from "../controller/paginasController.js";
const rutas = express.Router();
rutas.get("/", paginaInicio);

//Listar
rutas.get("/hoteles", mostrarHoteles);
rutas.get("/gerentes",paginaGerentes);
rutas.get("/habitaciones", paginaHabitaciones);

//Desplegar interfaz
rutas.get("/gestion_hoteles", paginaGestionHoteles);
rutas.get("/gestion_habitaciones", paginaGestionHabitaciones);
rutas.get("/gestion_gerentes", paginaGestionGerentes);

//Modificar
rutas.get("/modificar_hoteles", modificarHoteles);
rutas.get("/modificar_habitaciones", modificarHabitaciones);
rutas.get("/modificar_gerentes", modificarGerentes);

//Eliminar
rutas.get("/eliminar_hoteles", eliminarHoteles);
rutas.get("/eliminar_habitaciones", eliminarHabitaciones);
rutas.get("/eliminar_gerentes", eliminarGerentes)

//Crear
rutas.post("/gestion_hoteles", agregarHoteles);
rutas.post("/gestion_habitaciones", guardarHabitaciones);
rutas.post("/gestion_gerentes", guardarGerentes);

export default rutas;
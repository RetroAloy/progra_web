import { Habitaciones } from "../models/habitaciones.js";
import { Hoteles } from "../models/hoteles.js";

const paginaHabitaciones = async (req,res) =>{
    const habitaciones = await Habitaciones.findAll({
        include :{
            model:Hoteles
        }
    });

    res.render("habitaciones", {
        pagina: "Habitaciones",
        habitaciones: habitaciones
    });
}

export{
    paginaHabitaciones
}
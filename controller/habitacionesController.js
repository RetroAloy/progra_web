import { Habitaciones } from "../models/habitaciones.js";
import { Hoteles } from "../models/hoteles.js";

const guardarHabitaciones = async (req, res) => {
    const {id_hbt, piso, nombre, id_htl} = req.body;
    let { refrigerador } = req.body;

    const errores = [];

    if(refrigerador === undefined) {
        refrigerador = 0;
    }

    console.log(req.body);

    if(piso.trim() === "") {
        errores.push({ mensaje: "El piso no debe ser vacio"});
    }
    if(nombre.trim() ==="") {
        errores.push({ mensaje: "La nombre no debe ser vacio"} );
    }
    if(refrigerador === undefined){
        errores.push({ mensaje: "El refrigerador no debe estar vacio"});
    }
    if(id_htl === undefined  ){
        errores.push({ mensaje: "El hotel no debe estar vacia"});
    }
    if(errores.length > 0){
        res.render("habitaciones", {
            pagina: "Habitaciones", 
            errores,
            piso,
            nombre,
            refrigerador,
            id_htl
        });
    } else {
        console.log(id_hbt);
        if(id_hbt > 0){
            //Actualizar
            console.log("actualizar");
            try {
                await Habitaciones.update({
                    piso, 
                    nombre,
                    refrigerador,
                    id_htl
                },{where: {id_hbt:id_hbt}});
                res.redirect('/habitaciones');
            }   catch(error) {
                console.log(error);
            }
        }else{
            console.log(id_hbt);
            //almacenar en la base de datos
            try {
                await Habitaciones.create({
                    piso, 
                    nombre,
                    refrigerador,
                    id_htl
                });
                res.redirect('/habitaciones');
            } catch(error) {
                console.log(error);
            }
        }
        
    }
}


const paginaHabitaciones = async (req,res) =>{
    const habitaciones = await Habitaciones.findAll({
        include: {
            model: Hoteles
        }
    });

    res.render("habitaciones", {
        pagina: "Habitaciones",
        habitaciones
    });
}

const paginaGestionHabitaciones = async (req, res) => {
    const hoteles = await Hoteles.findAll();

    res.render("gestion_habitaciones", {
        pagina: "Gestion de Habitaciones",
        hoteles
    });
}

const modificarHabitaciones = async (req, res) =>{
    console.log('Listo '+ req.query.id)
    try {
      const habitacion = await Habitaciones.findByPk(req.query.id);
      const hotel = await Hoteles.findByPk(habitacion.id_htl);

      const hoteles = await Hoteles.findAll();

      res.render("gestion_habitaciones",{
        pagina: "Gestión de Habitaciones",
        id_hbt:         habitacion.id_hbt,
        piso:           habitacion.piso,
        nombre:         habitacion.nombre,
        refrigerador:   habitacion.refrigerador,
        id_htl:         habitacion.id_htl,
        hoteles,
        hotel_actual:{
            id_htl: hotel.id_htl,
            nombre: hotel.nombre,
            direccion: hotel.direccion,
            telefono: hotel.telefono,
            correo: hotel.correo,
            id_grt: hotel.id_grt
        }
      });

    } catch (error) {
      console.log(error);
    }
}

const eliminarHabitaciones = async (req, res) => {
    console.log('Listo para borrar ' + req.query.id);
        //Eliminar en la base de datos
        try {
            await Habitaciones.destroy({
                where: {
                        id_hbt: req.query.id,
                }
            }
        );
            res.redirect("/habitaciones");
        }   catch(error) {
            console.log(error);
        }
    
};


export{
    paginaHabitaciones,
    paginaGestionHabitaciones,
    guardarHabitaciones,
    modificarHabitaciones,
    eliminarHabitaciones
}
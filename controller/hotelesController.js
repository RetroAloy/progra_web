import { Gerentes } from "../models/gerentes.js";
import { Hoteles } from "../models/hoteles.js";

const agregarHoteles = async (req, res) => {
    const { id_htl, nombre, direccion, telefono, correo, id_grt } = req.body;
    const errores = [];

    console.log(req.body);

    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (direccion.trim() === "") {
        errores.push({ mensaje: "La direccion no debe ser vacio" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El telefono no debe estar vacia" });
    }
    if (correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe estar vacia" });
    }
    if (id_grt === undefined) {
        errores.push({ mensaje: "El gerente debe ser especificado" });
    }

    if (errores.length > 0) {
        res.render("gestion_hoteles", {
            pagina: "Hoteles",
            errores,
            nombre,
            direccion,
            telefono,
            correo,
            id_grt
        });
    } else {
        if(id_htl > 0){
            //Actualizar
            console.log("actualizar");
            try {
                await Hoteles.update({
                    nombre, 
                    direccion,
                    telefono,
                    correo,
                    id_grt
                },{where: {id_htl:id_htl}});
                res.redirect('/hoteles');
            }   catch(error) {
                console.log(error);
            }
        }else {
            //almacenar en la base de datos
            try {
                await Hoteles.create({
                    nombre,
                    direccion,
                    telefono,
                    correo,
                    id_grt
                });
                res.redirect('/gestion_hoteles');
            } catch (error) {
                console.log(error);
            }
        }
        
    }
};


const mostrarHoteles = async (req, res) => {
    //obtener registros
    const hoteles = await Hoteles.findAll();

    res.render("hoteles", {
        pagina: "Hoteles",
        hoteles
    });
}

const paginaGestionHoteles = async (req,res) => {
    const gerentes = await Gerentes.findAll();

    res.render("gestion_hoteles", {
        pagina: "Gestion de Hoteles",
        gerentes
    });
}


const modificarHoteles = async (req, res) =>{
    console.log('Listo '+ req.query.id)
    try {
      const hotel = await Hoteles.findByPk(req.query.id);
      const gerente = await Gerentes.findByPk(hotel.id_grt);

      const gerentes = await Gerentes.findAll({
        attributes: ['id_grt', 'nombre', 'ap_paterno', 'ap_materno', 'telefono']
    });

      res.render("gestion_hoteles",{
        pagina: "Gestion de Hoteles",
        id_htl:     hotel.id_htl,
        nombre:     hotel.nombre,
        direccion:  hotel.direccion,
        telefono:   hotel.telefono,
        correo:     hotel.correo,
        id_grt:     hotel.id_grt,
        gerentes,
        gerente_actual:{
            id_grt: gerente.id_grt,
            nombre: gerente.nombre,
            ap_paterno: gerente.ap_paterno,
            ap_materno: gerente.ap_materno
        }
      });

    } catch (error) {
      console.log(error);
    }
}

const eliminarHoteles = async (req, res) => {
    console.log('Listo borrar: ' + req.query.id);
        //Eliminar en la base de datos
        try {
            await Hoteles.destroy({
                where: {
                        id_htl: req.query.id,
                }
            }
        );
            res.redirect("/hoteles");
        }   catch(error) {
            console.log(error);
        }
    
};

export {
    agregarHoteles,
    mostrarHoteles,
    paginaGestionHoteles,
    modificarHoteles,
    eliminarHoteles
}
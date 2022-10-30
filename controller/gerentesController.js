import { Gerentes } from "../models/gerentes.js";
import { Hoteles } from "../models/hoteles.js";

const guardarGerentes = async (req, res) => {
    const { id_grt, nombre, ap_paterno, ap_materno, telefono } = req.body;
    const errores = [];

    console.log(req.body);

    if (nombre.trim() === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (ap_paterno.trim() === "") {
        errores.push({ mensaje: "El apellido paterno no debe estar vacia" });
    }
    if (ap_materno.trim() === "") {
        errores.push({ mensaje: "El apeliido materno no debe estar vacia" });
    }
    if (telefono.trim() === "") {
        errores.push({ mensaje: "El telefono no debe estar vacia" });
    }

    if (errores.length > 0) {
        res.render("gestion_gerentes", {
            pagina: "Gerentes",
            errores,
            nombre,
            ap_paterno,
            ap_materno,
            telefono
        });
    } else {
        console.log(id_grt);
        if(id_grt > 0){
            //Actualizar
            console.log("actualizar");
            try {
                await Gerentes.update({
                    nombre, 
                    ap_paterno,
                    ap_materno,
                    telefono
                },{where: {id_grt}});
                res.redirect('/gerentes');
            }   catch(error) {
                console.log(error);
            }
        }else{
            //almacenar en la base de datos
            try {
                await Gerentes.create({
                    id_htl,
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                });
                res.redirect('/gerentes');
            } catch (error) {
                console.log(error);
            }
        }
        
    }
};

const paginaGerentes=async (req, res) =>{
    //obtener registros
    const gerentes = await Gerentes.findAll({
        include :{
            model:Hoteles
        }
    });

    console.log(gerentes[0].hotele)

    res.render("gerentes", {
        pagina: "Gerentes",
        gerentes
    });
};


const modificarGerentes = async (req, res) =>{
    console.log('Listo '+ req.query.id)
    try {
      const gerente = await Gerentes.findByPk(req.query.id);

      res.render("gestion_gerentes",{
        pagina: "Gestión de Gerentes",
        id_grt:         gerente.id_grt,
        nombre:           gerente.nombre,
        ap_paterno:         gerente.ap_paterno,
        ap_materno:   gerente.ap_materno,
        telefono: gerente.telefono
      });

    } catch (error) {
      console.log(error);
    }
}

const eliminarGerentes = async (req, res) => {
    console.log('Listo para borrar ' + req.query.id);
        //Eliminar en la base de datos
        try {
            await Gerentes.destroy({
                where: {
                        id_grt: req.query.id,
                }
            }
        );
            res.redirect("/gerentes");
        }   catch(error) {
            console.log(error);
        }
    
};

export{
    paginaGerentes,
    guardarGerentes,
    modificarGerentes,
    eliminarGerentes
}
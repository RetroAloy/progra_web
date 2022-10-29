import { Gerentes } from "../models/gerentes.js";
import { Hoteles } from "../models/hoteles.js";

const AgregarGerentes = async (req, res) => {
    const { id_grt, id_htl, nombre, ap_paterno, ap_materno, telefono } = req.body;
    const errores = [];

    console.log(req.body);

    if (id_htl === undefined) {
        errores.push({ mensaje: "El hotel no debe ser vacio" });
    }
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
        res.render("agregar_gerentes", {
            pagina: "Gerentes",
            errores,
            id_htl,
            nombre,
            ap_paterno,
            ap_materno,
            telefono
        });
    } else {
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
};

const paginaGerentes=async (req, res) =>{
    //obtener registros
    const gerentes = await Gerentes.findAll({
        //atributes: ['id_htl', 'nombre', 'ap_paterno' , 'ap_materno', 'telefono'],
        include :{
            model:Hoteles
        }
    });

    res.render("gerentes", {
        pagina: "Gerentes",
        gerentes: gerentes
    });
};

export{
    paginaGerentes,
    AgregarGerentes
}
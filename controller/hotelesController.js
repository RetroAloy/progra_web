import { Hoteles } from "../models/hoteles.js";

const agregarHoteles = async (req, res) => {
    const { id_htl, nombre, direccion, telefono, correo } = req.body;
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

    if (errores.length > 0) {
        res.render("agregar_hoteles", {
            pagina: "Hoteles",
            errores,
            nombre,
            direccion,
            telefono,
            correo,
        });
    } else {
        //almacenar en la base de datos
        try {
            await Hoteles.create({
                nombre,
                direccion,
                telefono,
                correo
            });
            res.redirect('/hoteles');
        } catch (error) {
            console.log(error);
        }
    }
};


const paginaHoteles = async (req, res) => {
    //obtener registros
    const hoteles = await Hoteles.findAll({
        atributes: ['nombre', 'direccion', 'telefono', 'correo']
    });

    res.render("hoteles", {
        pagina: "Hoteles",
        hoteles: hoteles
    });
}

export {
    paginaHoteles,
    agregarHoteles
}
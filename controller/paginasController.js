const paginaInicio= (req,rest) =>{
    rest.render("inicio", {
        pagina: "Inicio",
    });
}


const paginaHotel = (req,res) => {
    res.render("agregar_hoteles", {
        pagina: "AgregarHoteles",
    });
}

const paginaGerente = (req,res) => {
    res.render("agregar_gerentes", {
        pagina: "AgregarGerentes",
    });
}

const paginaGestionHoteles = (req,res) => {
    res.render("gestion_hoteles", {
        pagina: "Gestion de Hoteles",
    });
}

const paginaGestionHabitaciones = (req, res) => {
    res.render("gestion_habitaciones", {
        pagina: "Gestion de Habitaciones",
    });
}


export{
    paginaInicio,
    paginaHotel,
    paginaGerente,
    paginaGestionHoteles,
    paginaGestionHabitaciones
}
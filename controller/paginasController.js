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




const paginaGestionGerentes = (req, res) => {
    res.render("gestion_gerentes", {
        pagina: "Gestión de Gerentes"
    });
}


export{
    paginaInicio,
    paginaHotel,
    paginaGerente,
    paginaGestionGerentes
}
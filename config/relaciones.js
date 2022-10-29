import { Hoteles } from "../models/hoteles.js";
import { Gerentes } from "../models/gerentes.js";
import { Habitaciones } from "../models/habitaciones.js";

function relacionHotelGerente(){
    Hoteles.hasOne(Gerentes, {foreignKey:"id_htl"});
    Gerentes.belongsTo(Hoteles, {foreignKey:"id_htl"});
}

function relacionHotelHabitacion(){
    Habitaciones.belongsTo(Hoteles, {foreignKey:"id_htl"});
    Hoteles.hasMany(Habitaciones, {foreignKey:"id_htl"});
}


export {
    Hoteles,
    Gerentes,
    relacionHotelGerente,
    relacionHotelHabitacion
}
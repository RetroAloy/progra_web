import { Gerentes } from "../models/gerentes.js"
import { Habitaciones } from "../models/habitaciones.js"
import { Hoteles } from "../models/hoteles.js"

function relacionHotelGerente() {
    Hoteles.belongsTo(Gerentes, {foreignKey: "id_grt"});
    Gerentes.hasOne(Hoteles, {foreignKey: "id_grt"});
}

function relacionHotelHabitaciones() {
    Habitaciones.belongsTo(Hoteles, {foreignKey:"id_htl"});
    Hoteles.hasMany(Habitaciones, {foreignKey:"id_htl"});
}

export {
    relacionHotelGerente,
    relacionHotelHabitaciones
}
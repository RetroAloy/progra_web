import {Sequelize} from "sequelize";
import db from "../config/db.js";

export const Habitaciones = db.define('habitaciones',{
    id_hbt: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_htl:{
        type:Sequelize.INTEGER
    },
    piso:{
        type:Sequelize.STRING
    },
    nombre:{
        type:Sequelize.STRING
    },
    refrigerador:{
        type:Sequelize.STRING
    },
}, {timestamps:false});
import  Sequelize  from "sequelize";
import db from "../config/db.js";

export const Gerentes = db.define('gerentes',{
    id_grt: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_htl:{
        type:Sequelize.INTEGER
    },
    nombre:{
        type:Sequelize.STRING
    },
    ap_paterno:{
        type:Sequelize.STRING
    },
    ap_materno:{
        type:Sequelize.STRING
    },
    telefono:{
        type:Sequelize.STRING
    },
}, {timestamps:false});
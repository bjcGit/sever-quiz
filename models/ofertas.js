const {DataTypes} = require('sequelize')
const { sequelize } = require('../db/configDB')

const Ofertas = sequelize.define(
    "ofertas",
    {      
        codigo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        cargo:{
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        empresa:{
            type: DataTypes.STRING,
            allowNull: false
        },
        salario:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        vacante:{
            type: DataTypes.NUMBER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);



module.exports = Ofertas
const {DataTypes} = require('sequelize')
const { sequelize } = require('../db/configDB')

const User = sequelize.define(
    "ciudadanos",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        tipoDocu:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroDocu:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombres:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaNaci:{
            type: DataTypes.DATE,
            allowNull: false
        },
        profesion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        aspiracion:{
            type: DataTypes.FLOAT,
            allowNull: false,           
        },
        correo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        timestamps: true
    }
);



module.exports = User
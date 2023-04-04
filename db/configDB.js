const { Sequelize } = require('sequelize')

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const pass = process.env.MYSQL_PASS;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    pass,
    {   
        host,
        dialect:"mysql"
    }
    
)
    
const dbMysql = async ()=>{
     
    try {

       await sequelize.authenticate();
       console.log('Conexion con MYSQL') 
        
    } catch (error) {
        console.log('Error de conexion', error)
    }
        
}

module.exports= {
    dbMysql,
    sequelize
}
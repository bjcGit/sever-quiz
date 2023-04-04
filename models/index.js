
const User = require('./userModel');
const Oferta = require('./ofertas')


// Numeracion.belongsTo(User, {foreignKey: 'userId'});
// User.hasMany(Numeracion, { foreignKey: 'userId' });
// Contratista.belongsTo(User, {foreignKey:'userId'})
// User.hasMany(User, {foreignKey:'userId'})

module.exports = {

    User,
    Oferta

}
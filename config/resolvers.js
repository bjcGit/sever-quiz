const { User, Oferta } = require("../models/index");

require("dotenv").config({ path: ".env" });

//Resolvers

const resolvers = {
  Query: {
    obtenerUsuarios: async (_, {}, ctx) => {
      try {
        const usuarios = await User.findAll({});
        return usuarios;
      } catch (error) {
        throw new Error(error);
      }
    },
    obtenerOfertas: async (_, {}, ctx) => {
      try {
        const ofertas = await Oferta.findAll({});
        return ofertas;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },

  Mutation: {
    nuevoUsuario: async (_, { input }, ctx) => {
      const { correo, numeroDocu } = input;

      const existeUsuario = await User.findOne({ where: { correo } });
      const existeDocu = await User.findOne({ where: { numeroDocu } });

      if (existeUsuario) {
        throw new Error(`Ya existe este usuario`);
      }
      if (existeDocu) {
        throw new Error(`Ya existe este documento`);
      }

      try {
        const usuario = new User(input);
        await usuario.save();

        return usuario;
      } catch (error) {
        console.log(error);
        throw new Error("No se puede crear el usuario", error);
      }
    },

    desactivarUsuario: async (_, { id }) => {
      const usuario = await User.findByPk(id);

      if (!usuario) {
        throw new Error(`No existe el ID: ${id}`);
      }
      try {
        await usuario.destroy(id);

        return "Eliminado";
      } catch (error) {
        console.log(error);
        throw new Error(`Algo salió mal, ${error}`);
      }
    },
    // actualizarNumeracion: async (_, {id, input}) => {

    //     const numeracion = await Numeracion.findByPk(id)

    //     if(!numeracion){
    //         throw new Error (`No existe el ID: ${id}`)
    //     }
    //     //Por si se necesita
    //     // if(!numeracion.estado){
    //     //     console.log('estado false')
    //     // }

    //     try {

    //         const result = await numeracion.update(input, {where: {id}})

    //         return result
    //     } catch (error) {
    //         console.log(error)
    //         throw new Error(`Algo salió mal, ${error}`)
    //     }

    // },
  },
};

module.exports = resolvers;

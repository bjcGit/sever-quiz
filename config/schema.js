const { gql } = require('apollo-server')

//Schema
const typeDefs = gql `

###################### TYPES ######################


    type Usuario {

        id: ID!
        tipoDocu: String
        numeroDocu: String
        nombres: String
        apellidos: String
        fechaNaci: String
        profesion: String
        aspiracion: Float
        correo: String
        createdAt: String 

    }
    
    type Oferta {
      
        codigo: String
        cargo: String
        descripcion: String
        empresa: String
        salario: Float
        vacante: Int
        createdAt: String

    }


    ###################### TYPES END ######################




    
    ###################### INPUT USUARIOS ######################

    input UsuarioInput {

        tipoDocu: String
        numeroDocu: String
        nombres: String
        apellidos: String
        fechaNaci: String
        profesion: String
        aspiracion: Float
        correo: String
       
    }

    ###################### INPUT USUARIOS END ######################





    ###################### QUERYS ######################
    type Query {
        
        obtenerUsuarios: [Usuario]
        obtenerOfertas: [Oferta]
                       
    }
    ###################### QUERYS END ######################





    ###################### MUTATION ######################
    
    type Mutation {


        ###### start ######

        nuevoUsuario(input: UsuarioInput) : Usuario
       

        ###### end ######

        



        ###### start ######
      
        #### actualizarNumeracion(id: ID!, input: NumeracionInput) : Numeracion
        desactivarUsuario(id: ID!) : String

        ###### end ######

  
    }

    ###################### MUTATION END ######################

`;

module.exports = typeDefs
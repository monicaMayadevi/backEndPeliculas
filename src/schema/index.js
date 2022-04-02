const { gql } = require('apollo-server')

const typeDefs = gql`
    type Pelicula
    {
        id: Int !
        nombre: String !
        clasificacion: Clasificacion !
        genero: Genero
    }
    enum Clasificacion
    {
      INFANTIL
      ADOLESCENTES
      ADULTOS
    }

    enum Genero
    {
      TERROR
      ACCION
      DRAMA
      COMEDIA
    }

    type RespuestaPeliculas
    {
        success: Boolean !
        peliculas: [ Pelicula ! ]  # no nulo si success == true

    }

    type Query
    {
        peliculas: RespuestaPeliculas !

    }
`
module.exports = typeDefs

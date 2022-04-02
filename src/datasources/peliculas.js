const { DataSource } = require( 'apollo-datasource' )

class PeliculasDataSource extends DataSource
{
  initializa( config )
  {
    this.context = config.context
  }

  listar()
  {
    return Promise.resolve(
      [
        { id: 1, nombre: 'Bambi', clasificacion: 'INFANTIL', genero: null},
        { id: 2, nombre: 'Pesadilla en la calle del infierno', clasificacion: 'ADULTOS', genero: 'TERROR' },
      ]
    )
  }
}

module.exports = PeliculasDataSource

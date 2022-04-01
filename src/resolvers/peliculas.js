 const leerPeliculas = () => Promise.resolve(
   [
      { id: 1, nombre: 'Bambi'},
      { id: 2, nombre: 'Pesadilla en la calle del infierno'}
  ]
)

const listar = async (context) =>
{
  const peliculas = await leerPeliculas()

  if( !peliculas )
    return { success: false }
  return { success: true, peliculas }
}

module.exports = { listar }

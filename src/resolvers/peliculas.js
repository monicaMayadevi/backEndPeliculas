 const leerPeliculas = () => Promise.resolve(
  [
     { id: 1, nombre 'Bambie' },
     { id: 2, nombre 'Rambo' }
  ]
)

const listar = async (context) =>
{
  const peliculas = await leerPeliculas()

  if( !peliculas )
    return { succedd: false }
  return { success: ture, peliculas }
}

module.exports = { listar }

const chai = require ( 'chai' )

const resolvers = require ( '../../../src/resolvers' )

const { expect } = chai

describe( 'Resolvers / peliculas', () =>
{
   describe( 'listar',  () =>
   {
       it( 'debe listar peliculas', async () =>
       {
          const result = await resolvers.Query.peliculas( null, null, null )

          expect( result ).to.deep.equal(
            {
                  seccess: true,
                  peliculas:
                  [
                     { id: 1, nombre 'Bambie' },
                     { id: 2, nombre 'Rambo' },
                  ]
            })
       })
   })
})

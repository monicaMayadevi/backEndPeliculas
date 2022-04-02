const chai = require ('chai')
const { isType } = require('graphql')
const resolvers = require('../../../src/resolvers')
const {expect}=chai

describe('Resolvers / peliculas',()=>
{
    let dataSources

    beforeEach( () =>
    {
      dataSources =
      {
        peliculas:
        {
          listar: () => Promise.resolve (
            [
              { id: 1, nombre: 'Bambi', clasificacion: 'INFANTIL' , genero: null},
              { id: 2, nombre: 'Pesadilla en la calle del infierno', clasificacion: 'ADULTOS', genero: 'TERROR' },
            ]
          )
        }
      }
    })
    it('debe listar peliculas', async()=>
    {
        const result = await resolvers.Query.peliculas(null,null,{ dataSources })

        expect(result).to.deep.equal({
            success: true,
            peliculas: [
                { id: 1, nombre: 'Bambi', clasificacion: 'INFANTIL', genero: null},
                { id: 2, nombre: 'Pesadilla en la calle del infierno', clasificacion: 'ADULTOS', genero: 'TERROR'}
            ]
        })
    })
})

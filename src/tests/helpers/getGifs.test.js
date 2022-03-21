import {getGifs} from '../../helpers/getGifs'

describe('Pruebas en getGif.js', () => {
    

    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs ('Dota 2')

        expect (gifs.length). toBe(15)

    })
    


})

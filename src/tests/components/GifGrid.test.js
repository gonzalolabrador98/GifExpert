import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock ('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid.js', () => {
    
    const category = jest.fn();

    test('debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        
        const gifs = [{
            id: 'Dota 2',
            url: 'http://localhost/algo/cualquiercosa.jpg',
            title: 'Juego'
        },
        {
            id: 'League of Legends',
            url: 'http://localhost/algo/cualquiercosa.jpg',
            title: 'Juego'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);      
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })

})

import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
import React from 'react';

describe('Pruebas en GifExpertApp.js', () => {
    
    test('debe mostrarse correctamente', () => {
        
        const wrapper=shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorias', () => {

        const categories=['Dota 2, League of Legends, CS:GO']
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect (wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})

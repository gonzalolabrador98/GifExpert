import { GifGridItem} from '../../components/GifGridItem';
import { shallow } from 'enzyme';
import React from 'react';
import { getByDisplayValue } from '@testing-library/react';


describe('Pruebas en GifGridItem', () => {

    const title='Un titulo'
    const url= 'https://elquetepincha.com'
    const wrapper = shallow( <GifGridItem title={title} url={url}/> )

    test('debe mostrar las pruebas correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el parrafo', () => {
        
        const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
    

    })
    
    test('debe mostrar la imagen con sus props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe tener animate__heartBeat', () => {
        
        const div = wrapper.find('div');
        const className= div.prop('className');

        expect( className.includes('animate__heartBeat')).toBe(true);
    })
    
    
    
})
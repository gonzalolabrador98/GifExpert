import { shallow } from "enzyme"
import React from "react"
import { AddCategory } from "../../components/AddCategory"


describe(' Pruebas AddCategory.js', () => {
    
 const setCategories = jest.fn();
 let wrapper=shallow(<AddCategory setCategories={setCategories}/>)

 beforeEach ( ()=> {

    jest.clearAllMocks();
    wrapper=shallow(<AddCategory setCategories={setCategories}/>)

 })

    test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value)
        })


    test('NO debe postear la informacion con submit', () => {
            
            wrapper.find('form').simulate('submit', {preventDefault(){}})

            expect(setCategories).not.toHaveBeenCalled();
        })
        
    test('debe postear la informacion con submit', () => {
        
        const value = 'Hola';
        
        wrapper.find('input').simulate('change', {target:{value}})

        wrapper.find('form').simulate('submit', { preventDefault(){}});
              
        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    

})

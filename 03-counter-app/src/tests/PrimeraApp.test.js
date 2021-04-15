//import { render } from "@testing-library/react";
import React from 'react';
import {shallow} from 'enzyme';
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom';


describe('Pruebas en <PrimeraApp />', () => {
    // test('debe de mostrar el mensaje "Hola, Soy Goku', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
    //     console.log(getByText(saludo));
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })    

    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Hola, soy Goku';      
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })
    
})
// SFC Staitless Funcional comoponents
// FC Funcional componentes 
//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo} ) =>{

    //No conviene validar aqui
    // if(!saludo){
    //     throw new Error('El saludo es necesario');
    // }


    return (
        <>
            <h1> {saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null, 3)}</pre>  */}
            <p>{subtitulo}</p>
        </>
        );

}

//propTypes - propiedades por defecto
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired

}

//defaultProps - propiedades por defecto
PrimeraApp.defaultProps ={
    subtitulo:'soy un subtitulo'
}

export default PrimeraApp;
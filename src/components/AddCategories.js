import React,{ useState } from 'react'
import PropTypes from 'prop-types'

const AddCategories = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handledInputValue = ( e ) => {

        setInputValue( e.target.value )

    };

    const handledInputSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( ctg => [ inputValue, ...ctg ]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handledInputSubmit } className="search-form container mb-5">
        <input 
            onChange={ handledInputValue } 
            className="search-bar form-control text-center"
            placeholder="Que quieres cosinar?"
            aria-describedby="searchHelp" 
            type="text" 
            value={ inputValue }
        />
        <div id="searchHelp" className="form-text text-center">Escribe el nombre de un ingrediente o receta.</div>
      </form>
    )
}

AddCategories.propTypes = {

}

export default AddCategories

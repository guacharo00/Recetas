import {useState, useEffect} from 'react';
import { fetchRecipes } from '../helpers/fetchRecipes';


export const useFetchRecipe = ( category ) => {

    const [state, setState] = useState({
        
        data: [],
        loading: true

    });

    useEffect(() => {
        fetchRecipes( category )
            .then( recipe => {
                setState({
                    data: recipe,
                    loading: false
                })
                
            })
    }, [category])

    return state;
    // return data;

};
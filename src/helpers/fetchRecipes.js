

export const fetchRecipes = async( catogory ) => {

    const ID = '693523ac';
    const API_KEY = '8a0154089e798d90648839a1da62f297';
  
    const url = `https://api.edamam.com/search?q=${ encodeURI( catogory ) }&app_id=${ID}&app_key=${API_KEY}`;

    const resp = await fetch( url );
    const {hits} = await resp.json();
    const recipes = hits.map( ({recipe}) => {
        console.log(recipe.label)
        return {
            title: recipe.label,
            image: recipe.image,
            ingredients: recipe.ingredientLines,
            label: recipe.label,
            uri: recipe.uri
        }
    })
    console.log(recipes)
    return recipes;
};
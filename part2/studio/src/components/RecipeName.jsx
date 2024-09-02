import recipedata from "./recipe.json";

function RecipeName() {
  return (
    <div>
      <h1>
        {recipedata[0].name}
      </h1>
    </div>
  );
  //return <div>{RecipeName}</div>
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
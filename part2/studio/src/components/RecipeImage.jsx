import recipedata from "./recipe.json";
import "./styling.css"


function RecipeImage() {
   return (
    <div className="recipeImage">
      <img src={recipedata[0].recipeImage} alt="" />
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
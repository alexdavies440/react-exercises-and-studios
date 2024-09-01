let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  function GiveRating(props) {
    return <h3>{stars[props.rating -1]}</h3>
  }
  GiveRating
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 

4 >= 1 && 4 <= 5 ? RateARecipe() : null;
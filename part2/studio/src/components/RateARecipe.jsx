let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating(props) {
    return <h3>{stars[props.rating -1]}</h3>
  }
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
({props} >= 1 && {props} <= 5) ? <GiveRating props={5}/> : null 

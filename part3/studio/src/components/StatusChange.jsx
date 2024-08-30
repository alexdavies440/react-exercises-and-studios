import { useState } from 'react';

export default function StatusChange () {
   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);
   const noteList = [];

   const handleChange = (event) => {
    
         setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      
      setRecipeStatus(true);
      document.getElementById("notes").append(notes + " ");
      document.addEventListener("submit", function() {
         return document.querySelector("input").value = "";
      })
      
      event.preventDefault();
   }
   
   
   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         
         <p>My Recipe Notes:</p>

         <p id='notes'><createList /></p>

         <p>I {recipeStatus ? "have" : "have not"}  tried this recipe!</p>
      </div>
   );
}

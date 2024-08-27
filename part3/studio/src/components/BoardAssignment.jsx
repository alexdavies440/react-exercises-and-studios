import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         "label": "Tasty",
         "value": "Tasty"
      },
      {
         "label": "Cookies for Days",
         "value": "Cookies for Days"

      },
      { "label": "Mom on Timeout",
         "value": "Mom on Timeout"
      }
   ];

   const [boardName, setName] = useState('no boards yet!');
   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map((callback) => {
               return (
                  <option value={callback.value}>{callback.label}</option>
               );
            })}
            
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}

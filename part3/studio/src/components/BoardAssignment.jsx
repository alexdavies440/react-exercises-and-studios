import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         "label": "Tasty",
         "value": "???"
      },
      {
         "label": "Cookies for Days",
         "value": "???"

      },
      { "label": "Mom on Timeout",
         "value": "???"
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
            <option value={boards.value}>{boards.label}</option>
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}

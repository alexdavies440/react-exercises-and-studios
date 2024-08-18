import React from 'react';
import classes from "./ChoresList.module.css"

export default function ChoresList () {
   return (
      <div className={classes.choresList}>
         <h3 className={classes.choresHeading}>Chore List</h3>
         <ol>
            <li className={classes.choresText}>Do the dishes</li>
            <li className={classes.choresText}>Take out the trash</li>
            <li className={classes.choresText}>Vacuum</li>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Cut the grass</li>
            <li className={classes.choresText}>Set up router</li>
            <li className={classes.choresText}>Trip planning</li>
         </ol>
      </div>
   );  
}
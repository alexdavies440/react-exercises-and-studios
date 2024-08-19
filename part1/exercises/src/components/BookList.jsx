import React from 'react';
import classes from "./BookList.module.css"

export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgzcGPhKfYv9J9M9COOlYJRZ7XB84ZIcENU2uAKXBr615UeyL7unyPKf6TkuiOm7KvkUGsnjEXGZ623u2124hrWSO3hQTVP8J4XGe6AA&usqp=CAc";
   let book2 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiQNo2zPcPG6JlY8wuq8taZVT36ir4zeQCEmp7a6etosNkkonZt41uRE2ncz-2YS-WDKhJJKorxImqQbTG-A-EhbAtHOqyaotl7QUAtDQK9kXoGAukOTCX1w&usqp=CAc";
   let book3 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAmZzkXex7niJFKNomtPArpBIX9CRFzIJHcTe4UJgJZ-9EBbw3dlWYPA0e_gEKoqhkFQGdDoSVS4BVPR-s3MxGUMWEwXrH-DLn4nG-npw&usqp=CAc";

   return (
      <div className={classes.bookList}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Unmasking Autism by Devon Price" />
         <img src={book2} alt="The Reckoning by John Grisham" />
         <img src={book3} alt="The New Couple by Alison James" />
      </div>      
   );
}
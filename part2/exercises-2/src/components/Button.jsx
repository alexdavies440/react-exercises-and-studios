import './styles.css';

function Button() {
   const onLearnMore = () => {
         alert("Save the whales!");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
import './styles.css';
import Button from './Button';
import oceans from './oceans.json'


function Profile()
{
   const listItem = oceans.map((ocean, id) => 
   <div key={id}>
      <img src={ocean.image} alt={ocean.name} className='img'/>
   </div>)
         
      
  
   return(
      <>
         <listItem />
         <Button />
      </>  
   );
}

export default Profile;
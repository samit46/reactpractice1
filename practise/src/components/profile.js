import React from "react";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';


const Profile = ({pic,name,us,url}) => {
  
    return(
   
       
       <Card className='mb-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {us}
        </Card.Text>
        <Card.Link href={url} target="blank">   <Button variant="primary">visit profile</Button></Card.Link>
      </Card.Body>
    </Card>
      
      
   
    
    )
}
export default Profile;





// <div className='profile'>
//         <p className='name'>my name is {name}</p>
//         <img className='profile-image'src={pic} alt={pic}></img>
//         <p className='about'>{us}</p>
//         </div>
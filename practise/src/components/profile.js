import React from "react";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

;

const Profile = ({profile}) => {
  
  return(
   
       
       <Card className='col-md-4- m-2' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={profile.img}/>
      <Card.Body>
        <Card.Title>{profile.name}</Card.Title>
        <Card.Text>
          {profile.about}
        </Card.Text>
        <Card.Link href={profile.url} target="-blank">   <Button variant="primary">visit  {profile.name}'s profile</Button></Card.Link>
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
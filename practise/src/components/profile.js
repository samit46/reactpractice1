import React from "react";

const Profile = ({pic,name,us}) => {
    return(
        
      <div className='profile'>
        <p className='name'>{name}</p>
        <img className='profile-image'src={pic} alt={pic}></img>
        <p className='about'>{us}</p>
      </div>
    )
}
export default Profile;


// import React, { useState, useEffect } from "react";
// function Profile({profile}) {
//   const [profile,setProfiles]=useState([])
//   useEffect(()=>{
//       fetch('/data/profiles.json')
//       .then(Response => Response.json())
//       .then(data => setProfiles(data))
//       .catch(error =>console.error('error fetching the profile',error));
//     },[]);
//   return (
//     <div className="container mt-5 mb-5">
//       <div className="row">
//         <h1 className="mb-5">GitHubs Profile</h1>
//         {profiles.map((profile, key) => {
//           return <Profile key={key} profile={profile} />;
//         })}
//       </div>
//     </div>
//   );
// }
// export default profile.js

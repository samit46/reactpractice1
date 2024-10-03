
import "./App.css";
import Profile from "./components/Profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
function App() {
 
  
  const [data , setData] = useState({
    name: "",
    age: "",
    email:""
  })
  const [isEmpty, setIsEmpty] = useState(true); 

  const updateName = 
    
      (e)=>{
        setData( {
          ...data,
          name: e.target.value
        })
        setIsEmpty(e.target.value == '' && data.age == ""&&  data.email == '' ? true : false)
      }
    

  const updateAge =
    
      (e)=>{
        setData({
          ...data,
          age: e.target.value
        })
        setIsEmpty(e.target.value == '' &&  data.name == ''&&  data.email == '' ? true : false)
        }
  
  const upemail = 
    
   
      (e)=>{
        setData({
          ...data,
          email:e.target.value
        })
        setIsEmpty(e.target.value =='' && data.email == ''&&  data.email == '' ? true:false)
      }
    

  
  // useEffect(()=>{
  //   fetch('/data/profiles.json')
  //   .then(Response => Response.json())
  //   .then(data => setProfiles(data))
  //   .catch(error =>console.error('error fetching the profile',error));
  // },[]);
  
  return (
    
    <div className="container">
      {
        isEmpty ?
          <h1>No Data</h1>
        :
        <>
        {
          data.name != '' ? <h1>Name: {data.name}</h1> : <></>
        }
        {
          data.age != '' ? <h1>Age: {data.age}</h1> : <></>
          
        }
        {
          data.email != '' ? <h1>Email: {data.email}</h1> : <></>
          
        }
        </>
      }
  <input type="text" placeholder="name" onChange={updateName}/>
  <input type="number" placeholder="age" onChange={updateAge}/>
  <input type="email" placeholder="" onChange={upemail}/>

  
    </div>
    

  )
}
{/* <div className='container mt-5'> */}
       
//    <div className='row'>
//    <h1>Github profiles</h1>
    
//     {profiles.map ((profile ,key) =>{
//     return<Profile key={key} profile={profile}/>
// })}
//    </div>
//     </div>
export default App;

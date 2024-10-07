
import "./App.css";
import Profile from "./components/Profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
function App() {
 
 const intialData = {
  number1 : "",
  number2 : "",
  result : ""
 }
  const [data , setData] = useState({intialData})
  const updateNumber1 = 
    
      (e)=>{
        setData( {
          ...data,
          parseFloat: e.target.value
        })
      }
      const updateNumber2 = 
    
      (e)=>{
        setData( {
          ...data,
          parseFloat: e.target.value
        })
      }
      const updateresult = 
      (e)=>{
       
      } 


  
 
  
  return (
    <div className="container">
      <h1>result : {data.Result}</h1>
      <label  for="number1"> number1</label>
      <input className="m-5" type="number" placeholder="ENTER YOUR  NUMBER" id="number1" onChange={updateNumber1}/>
      <label for ="number2"> number2</label>
      <input  className="m-5"type="number" placeholder="ENTER YOUR  NUMBER" id="number2" onChange={updateNumber2}/> 
     
      
        <div>
        <input type="button" className="m-2 p-3" value={"+"} onClick={() =>('add')}/>
        <input type="button" className="m-2 p-3" value={"-"} onClick={() =>('sub')}/>
        <input type="button" className="m-2 p-3" value={"*"} onClick={() =>{'mul'}}/>
        <input type="button" className="m-2 p-3" value={"/"} onClick={() =>{'div'}}/>
        <input type="button" className="m-2 p-3" value={"c"}/>
        </div>
      
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

 //   <div className="container">
  //     {
  //       isEmpty ?
  //         <h1>No Data</h1>
  //       :
  //       <>
  //       {
  //         data.name != '' ?<h1>Name: {data.name}</h1> : <></>
  //       }
  //       {
  //         data.age != '' ?<h1>Age: {data.age}</h1> : <></>
          
  //       }
  //       {
  //         data.email != '' ?<h1>Email: {data.email}</h1> : <></>
          
  //       }
  //         {
  //         data.city != '' ?<h1>city: {data.city}</h1> : <></>
          
  //       }
  //       </>
  //     }
  // <input type="text" placeholder="name" onChange={updateName}/>
  // <input type="number" placeholder="age" onChange={updateAge}/>
  // <input type="email" placeholder="email" onChange={upemail}/>
  // <input type="text" placeholder="city" onChange={updateCity}/>

  
  //   </div>


  // const [isEmpty, setIsEmpty] = useState(true); 

  // const updateName = 
    
  //     (e)=>{
  //       setData( {
  //         ...data,
  //         name: e.target.value
  //       })
  //       setIsEmpty(e.target.value == '' && data.age == "" &&  data.email == ''&&  data.city == '' ? true : false)
  //     }
    

  // const updateAge =
    
  //     (e)=>{
  //       setData({
  //         ...data,
  //         age: e.target.value
  //       })
        
  //       setIsEmpty(e.target.value == ''  &&  data.name == ''&&  data.email == ''&&  data.city == '' ? true : false)
 
  //       }
  
  // const upemail = 
    
   
  //     (e)=>{
  //       setData({
  //         ...data,
  //         email:e.target.value
  //       })
        
  //       setIsEmpty(e.target.value == '' && data.age == "" &&  data.name == ''&&  data.city == '' ? true : false)
 
  //     }
  //  const updateCity =   
  //  (e)=>{
  //   setData( {
  //     ...data,
  //     city: e.target.value
  //   })
  //   setIsEmpty(e.target.value == '' && data.age == "" &&  data.email == '' &&  data.name == ''? true : false)
  // }
    

   // useEffect(()=>{
  //   fetch('/data/profiles.json')
  //   .then(Response => Response.json())
  //   .then(data => setProfiles(data))
  //   .catch(error =>console.error('error fetching the profile',error));
  // },[]);
export default App;


import "./App.css";
import Profile from "./components/Profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Alert } from "bootstrap";
function App() {
 
 const intialData = {
  number1 : "",
  number2 : "",
  result : ""
 }
 const Result = ""

  const [data , setData] = useState({intialData})
  const updateNumber1 = 
    
      (e)=>{
        setData( {
          ...data,
         number1:parseFloat(e.target.value)
        })
      }
      const updateNumber2 = 
    
      (e)=>{
        setData( {
          ...data,
         number2:parseFloat(e.target.value)
        })
      }
      const updateResult = 
      (action)=>{
      if (action == 'add') { 
        setData({...data,result: data.number1 + data.number2})
        
      }
       else if (action == 'sub') {
       if (data.number1 >= data.number2) {
        setData({...data,result:data.number1-data.number2})
       }
       else{
        alert(data.number1 + " should be greater than " + data.number2  );
       }
      }
       else if (action == 'mul') {
        setData({...data,result:data.number1 * data.number2})
      }
       else if (action == 'div') {
        setData({...data,result: data.number1 / data.number2 })
      }
      else {
        setData(intialData)

      }
      
      } 

      const [history , sethistory] = useState([])
      const previousHistory =
       (e)=>{
        setData({
          ...data,
          result:e.target.value
        })

       }
       console.log(previousHistory);
       

  
 
  
  return (
    <div className="container row">
     <div className="container col-md-8 md">
     <h1>result :{data.result}</h1>
      <label htmlFor="number1">Number 1:</label>
      <input className="m-5" type="number" placeholder="Enter your number" id="number1" value={data.number1} onChange={updateNumber1} />
      <label htmlFor="number2">Number 2:</label>
      <input className="m-5" type="number" placeholder="Enter your number" id="number2" value={data.number2} onChange={updateNumber2} />

      
        <div>
        <input type="button" className="m-2 p-3" value={"+"} onClick={() => updateResult('add')}/>
        <input type="button" className="m-2 p-3" value={"-"} onClick={() => updateResult('sub')}/>
        <input type="button" className="m-2 p-3" value={"*"} onClick={() => updateResult('mul')}/>
        <input type="button" className="m-2 p-3" value={"/"} onClick={() => updateResult('div')}/>
        <input type="button" className="m-2 p-3" value={"c"} onClick={() => updateResult('c')}/>
        </div>
     </div>
     <div className="container col-md-4">
      <h1>history</h1>
      <ol>
        <li> {history}</li>
      </ol>
      <input type="button" value="clear"/>

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

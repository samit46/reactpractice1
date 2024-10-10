import "./App.css";
import Calculator from "./components/calculator";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Alert } from "bootstrap";
import Hello from "./components/hello";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="./components/hello">Calculator</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}


  /* <div className='container mt-5'> */


//    <div className='row'>
//    <h1>Github profiles</h1>

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

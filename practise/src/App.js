import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hello from "./components/hello.js";

function App() {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    {/* <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  href ="components/hello.js"><Hello/></Nav.Link>
          <Nav.Link href="/">profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container> */}
    <Hello/>
  </Navbar>
  )
}


export default App;


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


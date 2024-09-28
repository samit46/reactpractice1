
import './App.css';
import Profile from './components/Profile';

import Card from 'react-bootstrap/Card';


function App() {

  const profiles =[
    {
    name :"samit",
    img :"https://avatars.githubusercontent.com/u/182517915?v=4&size=64",
    about :"i am  web developer",
    profileurl :"https://github.com/samit46",
  },
    {
    name :"huzaif",
    img :"https://avatars.githubusercontent.com/u/182517802?v=4",
    about :"i am  web developer",
    profileurl:"https://github.com/Rehandossa"
  },
    {
    name :"rehan",
    img :"https://avatars.githubusercontent.com/u/182517802?v=4",
    about :"i am  student",
    profileurl:"https://github.com/Rehandossa"
  }, 
  {
    name :"muizz",
    img :"https://avatars.githubusercontent.com/u/182517915?v=4&size=64",
    about :"i am a death",
    profilesurl:"https://github.com/samit46"
  },
  {
    name :"muizz",
    img :"https://avatars.githubusercontent.com/u/182517915?v=4&size=64",
    about :"i am a death",
    profilesurl:"https://github.com/samit46"
  },
  {
    name :"rehan",
    img :"https://avatars.githubusercontent.com/u/182517802?v=4",
    about :"i am  student",
    profileurl:"https://github.com/Rehandossa"
  }, 
  {
    name :"rehan",
    img :"https://avatars.githubusercontent.com/u/182517802?v=4",
    about :"i am  student",
    profileurl:"https://github.com/Rehandossa"
  }, 
  {
    name :"rehan",
    img :"https://avatars.githubusercontent.com/u/182517802?v=4",
    about :"i am  student",
    profileurl:"https://github.com/Rehandossa"
  }, 
]
  return (
   
    <div className='container mt-5'>
       
   <div className='row'>
   <h1>Github profiles</h1>
    
    {profiles.map ((profile ,key) =>{
    return<Profile key={key} profile={profile}/>
})}
   </div>
    </div>

  );
}

export default App;

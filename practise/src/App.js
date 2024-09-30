
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
    img :"https://imgd.aeplcdn.com/370x208/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    about :"i am  web developer",
    profileurl:"https://github.com/Rehandossa"
  },
    {
    name :"rehan",
    img :"https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
    about :"i am  student",
    profileurl:"https://github.com/Rehandossa"
  }, 
  {
    name :"muizz",
    img :"https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M7qh5Onl1a1stLFy9R9q8EOwjdzn4naI2Q&s",
    about :"i am a death",
    profilesurl:"https://github.com/samit46"
  }
]
  return (
   
    <div className='container mt-5'>
       
      <h1>Github profiles</h1>
    
    {profiles.map ((profile ,key) =>{
    return<Profile key={key} name={profile.name} pic={profile.img} us={profile.about}url={profiles.profileurl}/>
})}
    </div>

  );
}

export default App;

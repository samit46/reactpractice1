
import './App.css';
import Profile from './components/Profile';

function App() {

  const profiles =[
    {
    name :"samit",
    img :"https://t3.ftcdn.net/jpg/02/16/60/42/360_F_216604243_4yvQhIudgknAWu04Ob7aSOu6BdIfhBNb.jpg",
    about :"i am  web designer",
  },
    {
    name :"huzaif",
    img :"https://imgd.aeplcdn.com/370x208/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    about :"i am  web developer",
  },
    {
    name :"rehan",
    img :"https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg",
    about :"i am  student",
  }
]
  return (
   
    <div>
      <h1>profile</h1>
    
    {profiles.map ((profile ,key) =>{
    return<Profile key={key} name={profile.name} pic={profile.img} us={profile.about}/>
})}




    </div>

  );
}

export default App;


import { useEffect, useState } from "react";
import Form from "./assets/Form";
import User from "./Users";


const Card =({title, quantity, discount}) =>{

  // react hook (useState)
  const [hasAdded, setHasAdded] = useState(false);
  const [count, setCount] = useState(0);

// react hook (useEffect)
useEffect(() => {
  console.log(`${title} has been added`)
}, [hasAdded]);

useEffect(()=>{
  console.log("Card rendered");
},[]);

  return(
    
    <div onClick={()=>{
      setCount(count +1)
    }} 
    
    className="cardbitch" style={{
      border: "5px solid black", 
      borderRadius: "10px", 
      backgroundColor: "#46BBE6",
      margin: "20px auto",
      padding: "20px",
      justifyContent: "center",
      display:"flex",
      flexDirection:"column",
      alignItems: "center"
    }}>
     <h2>{title}<br/> {count}</h2>
     <button onClick={()=>{setHasAdded (!hasAdded)}}
      >
        {hasAdded ? "delete from cart": "add to cart"}
      
     </button>
     </div>
    ); 
};

const users = [
  {id: 1, name:"John Doe", email:"johndoe@gmail.com"},
  {id: 2, name:"Lebron James", email:"lebronjames@gmail.com"},
  {id: 3, name:"Imo Ignacio", email:"imo@gmail.com"},
];

const userComponents = [];

// for (const user of users){
//   userComponents.push(<User key = {user.id} name ={user.name} email = {user.email} user_id = {user.id}
//    />)
// }

const isLoggedIn = true;
const hasnotif = true;
const role = 'admin';

// if statement

function WelcomeMessage(){
    if(isLoggedIn){
      return <h2>Welcom back, user!</h2>
    } else{
      return <h2>die</h2>
    }
}
// ternary operator
function GreetingMessage(){
  return <div>
    {hasnotif && <p>you have a new notification</p>}
  </div>
}

//logical && operator

function notification(){
  <div>
    <h2>{isLoggedIn ? "HI GOODMORNING" : "GOODBYE GOODNIGHT"}</h2>
  </div>
}

//switch case (if many cases)

function UserRole(){

  switch(role){
    case 'admin':
      return <h2>hello, admin!</h2>
    break;
    case 'user':
      return <h2>hello, user!!!</h2>
    default:
      return <h2>hello, guest!</h2>
  }
}

const App =() =>{


//***** conditional rendering *****
  function handleSubmit(e){
    e.preventDefault();
    console.log("form submitted");
  }

  function handleClick(){
    console.log("button clicked");
  }

  function handleTextChange(e){
    console.log(e.target.value);
  }

//***** conditional rendering *****
  return ( 
    <>
    <div className="cardbitch" style={{
      border: "3px solid black", 
      borderRadius: "10px", 
      backgroundColor: "whitesmoke",
      margin: "20px auto",
      padding: "20px",
      justifyContent: "center",
      display:"flex",
      flexDirection:"column",
      alignItems: "center"
    }}>
    <h1>I am a function component</h1>
    <Card title ="product5" quantity = {3}/>
    <Card title ="product2" quantity = {4}/>
    <Card title ="product3" quantity = {4}/>
    <Card title ="product4" quantity = {5}/>
  </div>

  <div className="container"> 
        <h1>Learn React: Handling Events</h1>
  </div>
  <div style={{justifyContent: "center",  display:"flex"}}>
    <button oncClick={handleClick}>SOMETHING</button>
    <Form onSubmit={handleSubmit}/>
  </div>


  <div className="container"> 
        <h1>Rendering a List of Components</h1>  
      </div>
  <div>
    {users
    //.filter((user)=> user.id ===1)
    .map((user)=>(
      <User 
      key = {user.id} 
      name ={user.name} 
      email = {user.email} 
      user_id = {user.id}
      />
    ))}
  </div>



  <div style={{justifyContent: "center",  display:"flex"}}>
    <h1><WelcomeMessage/></h1> {/*if statements*/}
    <GreetingMessage/>
    <UserRole/>
     
  </div>
      

  </>
  
  );
};



// function App (){
//   return <h1>Hi i am a function component</h1>
// }

export default App
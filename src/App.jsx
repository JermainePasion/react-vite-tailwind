
import Form from "./assets/Form";

const Card =({title, quantity, discount}) =>{
  return(
    <div>
     <h2>{title} {quantity}</h2>
     </div>
    ); 
};

const App =() =>{

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
        <button oncClick={handleClick}>SOMETHING</button>

        <Form onSubmit={handleSubmit}/>
      </div>

  </>
  
  );
};



// function App (){
//   return <h1>Hi i am a function component</h1>
// }

export default App
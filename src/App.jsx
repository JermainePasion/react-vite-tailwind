
const Card =({title}) =>{
  return <h2>{title}</h2>;
};

const App =() =>{
  return ( 
  <>
    <h2>I am a function component</h2>;
    <Card title ="product1"/>
    <Card title ="product2"/>
    <Card title ="product3" />
    <Card title ="product4" />
  </>
  );
};

// function App (){
//   return <h1>Hi i am a function component</h1>
// }

export default App
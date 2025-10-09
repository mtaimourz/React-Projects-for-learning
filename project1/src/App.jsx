import reactImg from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamentals', 'Core', 'Crucial']

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){

  const description = reactDescriptions[getRandomInt(2)];

  return (    
    <header>
      <img src={reactImg} alt="" />
      <h1>{description} React Essentials </h1>
      <p> this is a random para writtten only for testing.</p>
    </header>
  );
}

function App(){
  return (
    <div>
      <Header/>
    </div>
    
  )
}

export default App;
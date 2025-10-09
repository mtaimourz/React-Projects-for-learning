import { Component } from 'react';
import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png'
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


function CoreCocepts(props){
  return(
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )

}

function App(){
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
          <ul>
            <CoreCocepts
            title="component 1"
            description="this is dymmy description"
            image={componentImg}
            />
            <CoreCocepts 
              title="props"
            />
            <CoreCocepts/>
            <CoreCocepts/>
          </ul>

        </section>
      </main>
    </div>
  )
}

export default App;
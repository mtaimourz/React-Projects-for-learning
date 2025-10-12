import { Component } from 'react';
import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from "./data.js"
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
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreCocepts {...CORE_CONCEPTS[1]}/>
            <CoreCocepts {...CORE_CONCEPTS[2]}/>
            <CoreCocepts {...CORE_CONCEPTS[3]}/>
          </ul>

        </section>
      </main>
    </div>
  )
}

export default App;
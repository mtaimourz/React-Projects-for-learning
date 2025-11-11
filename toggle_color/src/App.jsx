import React, {useState} from 'react'
import './index.css';
import './App.css'

export default function App(){
  const [color, setColor] = useState("red")
  const [inputValue, setInputValue] = useState("Type a status...")  
  const colorArray = ['#e5e5e5', '#a2d2ff', "#bde0fe", "#ffafcc", '#ffc8dd', '#cdb4db', '#d4a373', "#faedcd", "#fefae0", '#e9edc9', '#ccd5ae', '#2a9d8f', "#2a9d8f", "#e9c46a", '#f4a261', '#e76f51']
  
  let style = {
    height: '100%',
    width: "100%",
    backgroundColor: color,
    position: "relative" 
  }
  
  let button = {
    position: "absolute",
    right: "50px",
    bottom: "50px",
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    zIndex: 10 
  }
  
  function handleFocus(){
    setInputValue("")
  }
  
  function handleBlur(e){
    if(e.target.value === ""){
      setInputValue("Type a status...")
    }
  }
  
  function handleChange(e){
    setInputValue(e.target.value)
  }
  
  function handleClick(){
    let seq = Math.trunc(Math.random() * colorArray.length)
    setColor(colorArray[seq])
  }
  
  return (
    <div style={style}> 
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center min-vh-100">
            <input 
              type="text"
              className='status w-100'
              style={{backgroundColor: color}} 
              value={inputValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              autoFocus
            />
          </div>
        </div>
      </div>
      <div onClick={handleClick} style={button}>
        <i className="fa-solid fa-palette"></i>
      </div>
    </div>
  )
}
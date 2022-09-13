import './App.css';

import React, { useState } from "react";
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";
import WarriorRobot from "./components/WarriorRobot";


const App = () => {

  const [userInput, setUserInput] = useState ("")
  const [badInput, setBadInput] = useState("")
 

  const handleChange  = (e) => {
    setUserInput(e.target.value);
    setBadInput(["bla", ...badInput])
    
  }

  const refreshPage = () => {

  }


  return (
    <>
    <div className="text-background">
    <h1 className="title">Robot World 🤖🌎</h1>
    <div className='wrapper'>
      <div className="robot-reponse"><p>Tell Us Something:</p>
      <input type="text" value={userInput} onChange={handleChange} /> 
    </div>   
    <GoodRobot userInput={userInput}/>
    <BadRobot badInput={badInput}/>
    <WarriorRobot userInput={userInput}/>
    </div>
    </div>
    </>
  )
}




export default App;

/*import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import Settings from './components/Settings';
import SettingsContext from './components/SettingsContext';
import Welcome from './Welcome';
import Modal from './components/Modal';


function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workInterval, setWorkInterval] = useState(5);
  const [breakInterval, setBreakInterval] = useState(2);

  const [isOpen, setIsOpen] = useState(false)

  return (

    <div>
      <div id='welcome'> 
        <Welcome /> 
      </div>
      <div> 
        <Modal open={isOpen}/> 
      </div>
      
    <div className='timer-container'> 
      <SettingsContext.Provider value={{
        workInterval,
        breakInterval,
        setWorkInterval,
        setBreakInterval,
        showSettings,
        setShowSettings
      }}> 
      { showSettings ? <Settings /> : <Timer/> }
      </SettingsContext.Provider>
    </div>

      <div className="todo-app" id='study'>
        <TodoList />
      </div>
    </div>
  );
}

export default App; */

import TodoList from './components/TodoList';
import './App.css';
import Timer from "./components/Timer";
import {useState} from "react";
import SettingsContext from "./components/SettingsContext";
import Welcome from './components/Welcome';

function App() {

  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);


  return (
    <main>
      <div className='container'>
        <div> 
        <Welcome/>
        </div>
          <div className='flex-container'> 
            <SettingsContext.Provider value={{
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
            }}>
          <div className="todo-app flex-child"> 
            <Timer /> 
          </div>
          
          
          </SettingsContext.Provider>

          <div className="todo-app flex-child">
            <TodoList />
          </div>
        </div>
      </div> 
    </main>
  );
}

export default App;

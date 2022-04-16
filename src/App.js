import React, {useState} from 'react';
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

export default App;

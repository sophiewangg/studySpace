import React, {useContext} from 'react';
import BackButton from './Backbutton';
import SettingsContext from './SettingsContext';

function Settings() {
    const settingsInfo = useContext(SettingsContext);

  return (
    <div className = 'settings'>
        <label> work interval: {settingsInfo.workInterval}:00</label>
        
        <input 
        type='number' 
        placeholder='minutes' 
        min='1' max='120' 
        name='number' 
        className='minInput'
        value = {settingsInfo.workInterval}
        onChange={event => settingsInfo.setWorkInterval(event.target.value)}
        />

        <label> break interval: {settingsInfo.breakInterval}:00</label>
        
        <input type='number'
        placeholder='minutes'
        min='1'
        max='120' 
        name='number' 
        className='minInput'
        value = {settingsInfo.breakInterval}
        onChange={event => settingsInfo.setBreakInterval(event.target.value)}/>
        <div>
            <BackButton onClick={() => settingsInfo.setShowSettings(false)}/> 
        </div>

    </div>
  )
}

export default Settings
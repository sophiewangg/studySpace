import React, {useContext} from 'react';
import SettingsContext from './SettingsContext';

function Settings(setWorkMinutes) {
    const settingsInfo = useContext(SettingsContext);

  return (
    <div className = 'settings'>
        <label> work interval:</label>
        
        <input 
        type='number' 
        placeholder={settingsInfo.workMinutes}
        min='1' max='120' 
        name='number' 
        className='minInput'
        value = {settingsInfo.workMinutes}
        onChange={event => settingsInfo.setWorkMinutes(event.target.value)}
        />

        <label> break interval:</label>
        
        <input type='number'
        placeholder={settingsInfo.breakMinutes}
        min='1'
        max='120' 
        name='number' 
        className='minInput'
        value = {settingsInfo.breakMinutes}
        onChange={event => settingsInfo.setBreakMinutes(event.target.value)}/>
    </div>
  )
}

export default Settings;
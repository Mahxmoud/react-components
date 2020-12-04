import React from 'react'
import './App.css';
import { FullName } from './component/profile/FullName'
import { Adress } from './component/profile/Adress'
import { ProfilePhoto } from './component/profile/ProfilePhoto'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='profile-photo'>
          <ProfilePhoto />
        </div>
        <div className='name-adress'>
          <FullName />
          <Adress />
        </div>

      </header>
    </div>
  );
}

export default App;

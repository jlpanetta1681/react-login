
import './App.css';
import Dashboard  from './views/Dashboard';
import LandingView from './views/LandingView';
import {useState} from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    if(isLoggedIn) {
      return <Dashboard />
      
    }else{
      return <LandingView setIsLoggedIn={setIsLoggedIn} />
    }
}

export default App;

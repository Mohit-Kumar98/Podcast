import React, {useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
// importing components
import Header from './components/HeaderF/Header';
import Listened from "./components/ListenedF/Listened";
import Signup from './components/UsersF/Signup';
import SignIn from './components/UsersF/SignIn';
import WatchList from './components/FavouriteListF/FavList'; 
// importing global provider

// import PodCastSummary from "./components/PodCastSummary";
import Home from './components/home';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Make API call to authenticate user
    setUser(username);
  }

  const handleLogout = () => {
    // Make API call to log out user
    setUser(null);
  }

  return (
      <div>
        <Header user={user} onLogout={handleLogout} />
          <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route exact path="/home" element={ <Home/>} />
            <Route exact path="/listened" element={ <Listened />}/>
            <Route exact path="/watchlist" element={ <WatchList />}/>
            <Route exact path="/signin/" element={<SignIn/>}/>  
            <Route exact path="/signup/" element={<Signup/>}/>
          </Routes>
      </div>
  );
}

export default App;


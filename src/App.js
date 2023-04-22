import React, { useContext, useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import { GlobalContext } from './context/GlobalState';
// importing components
import Header from './components/HeaderF/Header';
import List from './components/ListF/List';
import ListenList from "./components/ListenListF/ListenList";
import Listened from "./components/Listened";
import Home from './containers/Home';
import Search from './components/SearchF/Search';
import Podcast from './containers/Podcast';
import Account from './containers/Account';
import Signup from './components/users/Signup';
import SignIn from './components/users/SignIn';
// importing global provider

import PodCastSummary from "./components/PodCastSummary";

function App() {
  const context=useContext(GlobalContext);
  const {input}=context;
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
       {/* <Router> */}
        {/* <Router> */}
        <Header user={user} onLogout={handleLogout} />
        {/* <Search/> */}
                 {/* {input==="" && 
                  <>
                  <List/>
                  <List/>
                  <List/>
                  </>} */}
          <Routes>
            {/* <Route exact path="/" element={ <ListenList />} /> */}
            <Route exact path="/listened" element={ <Listened />}/>
            <Route exact path="/podcast/:id" element={<Podcast />}/>
            <Route exact path="/signin/" element={<SignIn/>}/>  
            <Route exact path="/signup/" element={<Signup/>}/>
            <Route exact path="/account" element={<Account user={user} onLogout={handleLogout} /> }/>
          </Routes>
          {/* </Router> */}
       {/* </Router> */}
      </div>
  );
}

export default App;
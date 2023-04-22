import React, { useContext, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
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
      
        <Header user={user} onLogout={handleLogout} />
        <Search/>
        {input==="" && 
                  <>
                  <List/>
                  <List/>
                  <List/>
                  </>}
        <Routes>
          {/* <Route exact path="/" element={ <ListenList />} /> */}
          <Route path="/listened" element={<Listened />} />
          <Route path="/podcast/:id" element={<Podcast />}>
          </Route>
          <Route path="/account" element={<Account user={user} onLogout={handleLogout} /> }>
          </Route>
          </Routes>
      </div>
  );
}

export default App;
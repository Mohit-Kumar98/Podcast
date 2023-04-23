import React, { useState } from 'react';
import './App.css';


// importing components
import Header from './components/HeaderF/Header';
import Footer from './components/FooterF/Footer';
import List from './components/ListF/List';
import Search from './components/SearchF/Search';

// importing global provider
import { GlobalProvider } from "./context/GlobalState";
import PodCastSummary from "./components/PodCastSummary";

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
        <GlobalProvider>
        <Header user={user} onLogout={handleLogout} />
        <Search/>
        <List/>
        <List/>
        <List/>
        <Footer/>
      </GlobalProvider>
      </div>
  );
}

export default App;
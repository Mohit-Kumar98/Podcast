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
<<<<<<< HEAD
        <Header user={user} onLogout={handleLogout} />
         <Search/>
          { input==="" && 
          <>
          <List/>
          <List/>
          <List/>
          </>}
          <Routes>
            {/* <Route exact path="/" element={ <ListenList />} /> */}
            <Route exact path="/listened" element={ <Listened />}/>
            <Route exact path="/podcast/:id" element={<Podcast />}/>
            <Route exact path="/signin/" element={<SignIn/>}/>  
            <Route exact path="/signup/" element={<Signup/>}/>
            <Route exact path="/account" element={<Account user={user} onLogout={handleLogout} /> }/>
          </Routes>
=======
        <GlobalProvider>
        <Header user={user} onLogout={handleLogout} />
        <Search/>
        <List/>
        <List/>
        <List/>
      </GlobalProvider>
>>>>>>> 494bd8f7f3d71058c51cd46784391d743417f0a0
      </div>
  );
}

export default App;
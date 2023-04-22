import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Data from './Data'
import "./Search.css";
import ListData from '../ListF/ListData';





function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search Podcast"
        />
      </div>
      <Data input={inputText} />
      <ListData input={inputText} />
    </div>
  );
}


export default Search;
import React, {useState} from "react";
import './App.css';
import Search from './components/search/Search';
import List from "./components/list/List";

import {data} from "./results"
function App() {
 const [searchText , setSearchText]= useState("");
 const [searchResult, setSearchResult] = useState([]);

 const  handleChange =(e)=>{
  setSearchText(e.target.value)
  console.log(e.target.value)
 }
 const handleSearch=()=>{
  // as docker is not  working 
  // GET /bing
  // - GET /yahoo
  // - GET /google
   setSearchResult(data.results)
 }

  return (
    <div className="App">
       <header>
         <p>Ebay</p>
       </header>
        <h5>Search Engine  Comparison</h5>
      <Search handleChange={handleChange} handleSearch={handleSearch}/>
      <List lists={searchResult}/>
    </div>
  );
}

export default App;

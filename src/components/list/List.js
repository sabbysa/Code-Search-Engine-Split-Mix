import React, { useState } from "react";
import './list.css'

const List = ({ lists }) => {  
  const [split, setSplit] = useState(false);


  const renderMixList = () => {
    return (
      <div>
        {lists.map((l) => (
          <>
            <h4>{l.title}</h4>
            <p>{l.link}</p>
            <hr></hr>
          </>
        ))}
      </div>
    );
  };

 const renderSplitList = ()=>{
     const  google=lists.filter(l=>l.sources.includes("google"));
     const  yahoo=lists.filter(l=>l.sources.includes("yahoo"));

     return (
        <div className="grid-container">
            <div className="google-list">
                <h5>Google</h5>
          {google.map((l) => (
            <>
              <h4>{l.title}</h4>
              <p>{l.link}</p>
              <hr></hr>
            </>
          ))}
        </div>
        <div className="yahoo-list">
                <h5>yahoo</h5>
          {yahoo.map((l) => (
            <>
              <h4>{l.title}</h4>
              <p>{l.link}</p>
              <hr></hr>
            </>
          ))}
        </div>
        </div>
      );
     
 }


  return (
    <div>
      {lists.length ? (
        <div>
          
            <div className="toggle-buttons">
            <h2>searchResult</h2>
                <button   onClick={()=>{setSplit(!split)}}>Mix</button>
                <button  onClick={()=>{setSplit(!split)}}>split</button>
                </div>
          <div>{ !split&&renderMixList()}</div>
          <div>{ split&& renderSplitList()}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;

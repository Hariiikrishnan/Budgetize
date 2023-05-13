import React from "react";


import "../styles/shortCard.css";

function ShortCard(props) {
 
  console.log(props)
  return (
    <>
      <div id="cardSection">
       
          
            <div id="cardWrapper">
              <h4>{props.date}</h4>
              <h4>{props.money}</h4>
            </div>
          
        

        
      </div>
    </>
  );
}

export default ShortCard;

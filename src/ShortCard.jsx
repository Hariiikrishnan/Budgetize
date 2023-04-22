import React from "react";


import "./shortCard.css";

function ShortCard() {
  const data = [
    {
      date: "15-03-2023",
      content: "Mill..",
      amount: 190,
    },
    {
      date: "16-03-2023",
      content: "Pub..",
      amount: 1000,
    },
    {
      date: "17-03-2023",
      content: "Out..",
      amount: 2000,
    },
    {
      date: "15-03-2023",
      content: "Mill..",
      amount: 190,
    },
    {
      date: "16-03-2023",
      content: "Pub..",
      amount: 1000,
    },
    {
      date: "17-03-2023",
      content: "Out..",
      amount: 2000,
    },
  ];

  return (
    <>
      <div id="cardSection">
        {data.map((singleData) => {
          return (
            <div id="cardWrapper">
              <h4>{singleData.date}</h4>
              <h4>{singleData.amount}</h4>
            </div>
          );
        })}

        
      </div>
    </>
  );
}

export default ShortCard;

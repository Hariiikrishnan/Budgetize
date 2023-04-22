import React from "react";

import "./gauge.css";

function Gauge() {
  var maxLimit = 4000;
  var currentAmount = 2000;
  var spendPercent = (currentAmount / maxLimit) * 100;
  var needlePointer = spendPercent * 1.8 - 90;

  return (
    <>

      <div class="d-board-gauge">
        <div class="gauge">
          <div class="progress">
            <div
              class="bar"
              style={{ transform: `rotate(${needlePointer}deg` }}
            ></div>
            <div
              class="needle"
              style={{ transform: `rotate(${needlePointer}deg` }}
            ></div>
          </div>
          <div class="gauge-hide">
            <h2>₹ {currentAmount}</h2>
          </div>
        </div>
        <div class="d-board-welcome">
          <h2>Welcome</h2>
          <h2>back,</h2>
          <h2>Owner</h2>
        </div>
      </div>
      <div class="d-board-footer">
        <h4> Monthly Limit : {maxLimit}</h4>
      </div>
     
    </>
  );
}

export default Gauge;

import React, { useState } from "react";
import "./Lift.css";

const Lift = () => {
  const [slider, setSlider] = useState(949);

  const styling = {
    transform: `translateY(${slider}%)`,
    transitionDuration: "3s",
  };
  return (
    <div className="main">
      <div className="lifts">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div className="slider">
        <div className="box2" style={styling}>
          Lift
        </div>
      </div>
      <div className="lifts">
        <div className="box">9th Floor</div>
        <div className="box">8th Floor</div>
        <div className="box">7th Floor</div>
        <div className="box">6th Floor</div>
        <div className="box">5th Floor</div>
        <div className="box">4th Floor</div>
        <div className="box">3th Floor</div>
        <div className="box">2th Floor</div>
        <div className="box">1th Floor</div>
        <div className="box">G Floor</div>
      </div>

      <div className="numPad">
        <div className="firstRow">
          <div className="box3" onClick={() => setSlider(1)}>
            9
          </div>
          <div className="box3" onClick={() => setSlider(106)}>
            8
          </div>
          <div className="box3" onClick={() => setSlider(211)}>
            7
          </div>
        </div>
        <div className="secRow">
          <div className="box3" onClick={() => setSlider(318)}>
            6
          </div>
          <div className="box3" onClick={() => setSlider(423)}>
            5
          </div>
          <div className="box3" onClick={() => setSlider(526)}>
            4
          </div>
        </div>
        <div className="thirdRow">
          <div className="box3" onClick={() => setSlider(633)}>
            3
          </div>
          <div className="box3" onClick={() => setSlider(738)}>
            2
          </div>
          <div className="box3" onClick={() => setSlider(848)}>
            1
          </div>
        </div>
        <div className="lastRow">
          <div className="box3" onClick={() => setSlider(949)}>
            G
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lift;

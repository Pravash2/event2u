import React from "react";

import icon_calender from "../../resources/icons/calendar.png";
import icon_location from "../../resources/icons/location.png";

import { Fade } from "react-reveal";

const venueStyle = {
  flex: 1,
  allignItem: "center",
  justifyContent: "center",
  display: "flex",
  justifyContent: "space-around"
};

const marginStyle = {};

const Venue = () => {
  return (
    <div>
      <div className="bck_black">
        <div className="vn_wrapper " style={marginStyle}>
          <div className="bck_black" style={venueStyle}>
            <Fade top>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_red" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_calender})`
                      }}
                    />
                  </div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">7 August 2017 @ 10.00</div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="vn_item">
                <div className="vn_outer">
                  <div className="vn_inner">
                    <div className="vn_icon_square bck_yellow" />
                    <div
                      className="vn_icon"
                      style={{
                        background: `url(${icon_location})`
                      }}
                    />
                  </div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">345 Speer Street Oakland,CA 9835</div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;

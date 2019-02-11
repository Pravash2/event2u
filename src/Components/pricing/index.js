import React, { Component } from "react";
import Button from "../utils/button";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons",
      "Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons",
      "Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons"
    ],
    linkto: ["http://sales/b", "http://sales/c", "http://sales/m"],
    delay: [500, 0, 500]
  };

  showboxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <Button
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showboxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;

import React, { Component } from "react";

import Header from "./Components/HeaderFooter/header";
import Featured from "./Components/featured/index";
import VenueInfo from './Components/venueInfo/index';
import HighLights from './Components/HighLights/index'
import Pricing from './Components/pricing/index'
import Location from './Components/Location/location'
import Footer from './Components/HeaderFooter/footer'

import {Element} from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div >
       
        <Header />
         <Element name="eventstartin">
        <Featured />
         </ Element>
         <Element name="venueInfo">
        <VenueInfo />
         </ Element>
        <Element name="highlights">
        <HighLights  />
        </ Element>
         <Element name="pricing">
        <Pricing />
         </ Element>
         <Element name="location">
        <Location />
         </ Element>
        <Footer />
      </div>
    );
  }
}

export default App;

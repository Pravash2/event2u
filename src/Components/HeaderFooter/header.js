import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "../../resources/styles.css";
import SideDrawer from "./sideDrawer";

class Header extends Component {
  state = {
    drawer: false,
    headerShow: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handelScroll);
  }
  componentWillUnmount(){
      window.removeEventListener("scroll", this.handelScroll);
  }

  handelScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: false
      });
    } else {
      this.setState({
        headerShow: true
      });
    }
  };

  MenuIconHandeler = () => {
    this.setState({ drawer: !this.state.drawer ? true : false });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}>
        <ToolBar>
          <div className="header_logo">
            <div className="font-righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Event</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={this.MenuIconHandeler}>
            <MenuIcon />
          </IconButton>

          <SideDrawer open={this.state.drawer} close={this.MenuIconHandeler} />
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;

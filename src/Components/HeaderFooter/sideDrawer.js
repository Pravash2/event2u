import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { scroller } from "react-scroll";

const sideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  const AnchorItem = (
    <List component="nav">
      <ListItem button>
        <ListItemText
          primary="Event Start In"
          onClick={() => scrollToElement("eventstartin")}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Venue NFO"
          onClick={() => scrollToElement("venueInfo")}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="HighLight"
          onClick={() => scrollToElement("highlights")}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Pricing"
          onClick={() => scrollToElement("pricing")}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Location"
          onClick={() => scrollToElement("location")}
        />
      </ListItem>
    </List>
  );

  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.close}>
        {AnchorItem}
      </Drawer>
    </div>
  );
};

export default sideDrawer;

import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Profilepic from "../assets/profileone.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={7}>
            <h2>Contact Details</h2>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Light 300" }}
                  >
                    <i className="fa fa-phone-square" ari-hidden="true" />
                    <span>07855018590</span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Light 300" }}
                  >
                    <i className="fa fa-envelope" ari-hidden="true" />
                    <span>andyhcodes@gmail.com</span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Light 300" }}
                  >
                    <i className="fa fa-address-book" ari-hidden="true" />
                    <span>28 West Grove, Sale, Manchester M33 3AS</span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;

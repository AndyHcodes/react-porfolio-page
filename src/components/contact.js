import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profilepic from "../assets/profileone.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Andrew Harrison</h2>
            <img
              className="profile-pic-one"
              src={Profilepic}
              alt="profile-pic"
              style={{ height: "250px", width: "250px" }}
            />
          </Cell>
          <Cell col={6}>Contact Details</Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;

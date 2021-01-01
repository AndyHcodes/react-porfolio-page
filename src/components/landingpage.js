import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="circular--portrait">
              <img
                src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                alt="profile-pic"
                className="avatar-img"
              />
            </div>
            <div className="banner-text">
              <h3>Andrew Harrison</h3>
              <h3>Full Stack Web Developer</h3>
              <hr />
              <p>
                HTML/CSS | Javascript | React | NodeJS | MySQL | MongoDB |
                Express
              </p>
              <div className="social-links">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

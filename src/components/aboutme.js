import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profilepic from "../assets/profilefour.png";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Grid className="about-me">
          <Cell col={12}>
            <h2>About Me</h2>
            <div>
              <img
                className="profile-pic-four"
                src={Profilepic}
                alt="profile-pic"
              />
            </div>

            <div>
              <p>
                A Software Developer, recently completed the Manchester Codes
                Fast Track Software Developer Bootcamp. With over 16 years of
                experience in the banking sector, I am now seeking a role in
                Software Development, bringing with me a wealth of skills and
                professional experience. I am a keen learner and would like to
                land a role where I can satisfy my passion for further learning
                and development.
              </p>

              <p>
                I am passionate about sport, both playing and watching as well
                as music, films and books. When I am not spending time with my
                very lively two year old daughter, I am generally on my bike or
                attending a sporting event or gig. I love outdoor adventures
                having cycled across Italy and kayaked the Caledonian canal. I
                also love to travel having visited New York, Boston, Toronto,
                Montreal, Brisbane and Hong Kong in recent years.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;

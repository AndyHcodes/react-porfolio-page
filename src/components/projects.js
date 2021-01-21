import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Project extends Component {
  render() {
    return (
      <div className="projects">
        <Card shadow={7} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#black",
              height: "176px",
              background:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
            }}
          ></CardTitle>
          <CardText>
            <h4>weather-app</h4>
            <hr />
            This App displays the weather forecast for cities in the UK and can
            display a more detailed forecast for each day.
          </CardText>
          <CardActions border>
            <a href="https://github.com/AndyHcodes/weather-app">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://reverent-lalande-2a940c.netlify.app/">
              <Button colored>Live Page</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#black",
              height: "176px",
              background:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
            }}
          ></CardTitle>
          <CardText>
            <h4>tech-test</h4>
            <hr />
            This App was built as part of my Manchester Codes Bootcamp and was
            designed to simulate a standard tech test. The app has a search
            function that sends a request to Nasa for a specific image that then
            displays all images linked to the search word.
          </CardText>
          <CardActions border>
            <a href="https://github.com/AndyHcodes/tech-test">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://tech-test-three.vercel.app/">
              <Button colored>Live Page</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#black",
              height: "176px",
              background:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
            }}
          ></CardTitle>
          <CardText>
            <h4>Last Person Standing</h4>
            <hr />A joint collaboration with two other Manchester Codes
            students. This is a football selector game that allows you to
            register or login and select a team you think will win. The data is
            stored on MongoDB and live scores and fixture are fetched from an
            API.
          </CardText>
          <CardActions border>
            <a href="https://github.com/JackRandom/last-person-standing">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://last-person-standing-git-master.jackrandom1.vercel.app/">
              <Button colored>Live Page</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}
export default Project;

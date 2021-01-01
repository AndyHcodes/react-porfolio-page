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
            This App was built as part of my Manchester Codes Bootcamp. This
            project was to simulate a standard tech test. The app has a search
            function that sends a request to Nasa for a specific image then
            displays all image linked to the keyword.
          </CardText>
          <CardActions border>
            <a href="https://github.com/AndyHcodes/tech-test">
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
            <h4>surreal-estate</h4>
            <hr />
            This App is property listings page that allows you to add a property
            listing with several criteria including city and to filter by city
            as well as sorting price descending and ascending.
          </CardText>
          <CardActions border>
            <a href="https://github.com/AndyHcodes/surreal-estate">
              <Button colored>GitHub</Button>
            </a>
            <Button colored>Live Page</Button>
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

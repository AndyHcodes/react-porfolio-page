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
      <div className="project-cards">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#black",
              height: "176px",
              background:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover",
            }}
          >
            weather-app
          </CardTitle>
          <CardText>
            This App was built as part of my Manchester Codes Bootcamp. It
            displays the weather forecast for cities in the UK and can display a
            more detailed forecast for each day.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Page</Button>
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
          >
            tech-test
          </CardTitle>
          <CardText>
            This App was built as part of my Manchester Codes Bootcamp. This
            project was to simulate a standard tech test. The app has a search
            function that sends a request to Nasa for a specific image then
            displays all image linked to the keyword.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Live Page</Button>
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
          >
            surreal-estate
          </CardTitle>
          <CardText>
            This App was built as part of my Manchester Codes Bootcamp. It has a
            page that allows you to add a property listing with several criteria
            including city and to filter by city as well as sorting price
            descending and ascending.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
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

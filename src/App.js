import "./App.css";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Component } from "react";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="profile-page">
        <Layout>
          <Header className="header-color" title="Andrew Harrison" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer className="drawer-color" title="Andrew Harrison">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDom from "react-dom";
import Layout from "./Layout";
import Info from "./Info";
import Signup from "./Signup";
import styled from "styled-components";
import "./index.css";
import Signin from "./Signin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <div className="homepage">
                <div className="homepage-logo">
                  <h1 className="homepage-logo-heading">UltimateAPI</h1>
                  <p className="homepage-logo-content">
                    for UFC fighters and stats
                  </p>
                </div>
                <div className="homepage-divider"></div>
                <Signup></Signup>
              </div>
              <Info></Info>
            </Layout>
          </Route>
          <Route exact path="/signin">
            <Layout>
              <div className="homepage">
                <div className="homepage-logo">
                  <h1 className="homepage-logo-heading">Sign in</h1>
                  <p className="homepage-logo-content">
                    for UFC fighters and stats
                  </p>
                </div>
                <div className="homepage-divider"></div>
                <div className="homepage-container">
                  <Signin></Signin>
                </div>
              </div>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .homepage {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 123px;
    margin-bottom: 123px;
  }
  .homepage-container {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .homepage-logo {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .homepage-divider {
    height: 444px;
    width: 1px;
    background-color: black;
    color: black;
  }
  .homepage-logo-heading {
    font-size: 72px;
    margin: 0px;
    font-weight: 500;
  }
  .homepage-logo-content {
    font-size: 24px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 300;
  }
`;

ReactDom.render(<App></App>, document.getElementById("root"));
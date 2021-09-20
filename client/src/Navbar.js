import React, { useEffect, useContext, useRef } from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { setUser } = useContext(UserContext);
  const profileLink = useRef(null);
  const docLink = useRef(null);
  const dynamicButton = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (Auth.isAuthenticated()) {
      dynamicButton.current.innerHTML = "sign out";
      profileLink.current.hidden = false;
      docLink.current.hidden = false;
    }
  });

  const handleClick = () => {
    if (Auth.isAuthenticated()) {
      console.log("Signed out");
      setUser(null);
      Auth.logout(() => {
        dynamicButton.current.innerHTML = "sign in";
        history.push("/");
        profileLink.current.hidden = true;
        docLink.current.hidden = true;
        alert("You have signed out");
      });
    } else {
      history.push("/signin");
    }
  };
  return (
    <Wrapper>
      <div className="navbar-search">
        <Link className="navbar-link navbar-logo" to="/">
          <GiBoxingGloveSurprise
            size={70}
            color="#DB0000"
          ></GiBoxingGloveSurprise>
        </Link>
        <input
          className="nav-input"
          type="text"
          placeholder="search the documentation..."
        />
      </div>
      <div className="navbar-links">
        <div className="navbar-profile">
          <Link
            hidden
            ref={profileLink}
            className="navbar-link"
            to="/dashboard"
          >
            profile
          </Link>
          <Link
            hidden
            ref={docLink}
            className="navbar-link navbar-doc"
            to="/doc"
          >
            doc
          </Link>
        </div>
        <div className="navbar-signin">
          <button
            className="navbar-link"
            ref={dynamicButton}
            onClick={handleClick}
          >
            sign in
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 78px;

  li {
    list-style-type: none;
  }
  .nav-input {
    width: 533px;
    height: 42px;
    border-radius: 50px;
    border-style: none;
    font-size: 18px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
  }
  input::placeholder {
    font-size: 18px;
  }
  .navbar-profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
  .navbar-signin {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
  }
  .navbar-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 360px;
  }
  .navbar-link {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: white;
    text-decoration: none;
  }
  .navbar-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 653px;
    margin-left: 31px;
  }
  .navbar-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    cursor: pointer;
    border-style: none;
    border-radius: 50px;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    width: 111px;
    height: 52px;
  }

  GiBoxingGlove {
    color: #db0000;
  }
`;

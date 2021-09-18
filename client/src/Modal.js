import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { UserContext } from "./UserContext";

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>{showModal ? <EmailModal closeModal={closeModal}></EmailModal> : null}</>
  );
};

const EmailModal = ({ closeModal }) => {
  const { user } = useContext(UserContext);
  const [setEmail] = useState({ email: user.email });
  const errorMessage = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setEmail({ email: value });
  };

  // ADD ONCLICK FOR SUBMIT
  return (
    <>
      <Wrapper>
        <div className="modal-body">
          <div className="modal-section-1">
            <p className="profile-text">Email</p>
            <button onClick={closeModal} className="modal-close-button">
              <MdClose className="icon"></MdClose>
            </button>
          </div>
          <div className="modal-section-2">
            <p>Change email to:</p>
            <input
              className="dashboard-input"
              type="text"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="modal-section-3">
            <button className="modal-submit-button">Change</button>
            <p hidden ref={errorMessage} className="error-message">
              error
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .error-message {
    color: red;
  }
  .modal-submit-button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    border-radius: 50px;
    border-style: none;
    color: white;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 300;
  }
  .modal-section-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-section-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 250px;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }
  .modal-body {
    width: 888.48px;
    height: 450px;
    border-style: solid;
    border-width: 2px;
    border-radius: 15px;
    border-color: #9c9a9b;
    box-shadow: 5px 7px #dddddd;
  }
  .modal-section-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding: 10px;
    border-radius: 13px 13px 0 0;
    border-style: solid;
  }
  .profile-text {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: white;
  }
  .modal-close-button {
    height: 29px;
    border-style: none;
    background-color: white;
  }
  .icon {
    color: white;
    height: 30px;
    width: 30px;
    background-color: black;
  }
`;

export default Modal;
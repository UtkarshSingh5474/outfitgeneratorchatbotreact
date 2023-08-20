import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ImageAvatars from "./Avatar";
import PastOrders from "./PastOrders";
import SocialMediaTrends from "./SocialMediaTrends";
import UserInfo from "./UserInfo";

function Header(props) {
  const [choice, setChoice] = useState(null);

  const setChange = (n) => {
    setChoice(n);
  };

  return (
    <>
      <div
        className="main"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Navbar
          expand="lg"
          variant="dark"
          className="justify-content-space-evenly"
          style={{
            backgroundColor: "#498FFF",
            borderRadius: "100px",
            width: "80%",
            paddingLeft:"10px",
            
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex align-items-center w-100 justify-content-center">
              {" "}
              {/* Added justify-content-center */}
              <ImageAvatars />
              <div
                className="line"
                style={{
                  borderLeft: "1px solid yellow",
                  height: "40px",
                  marginLeft: "20px",
                }}
              ></div>
              <Container>
                <Nav className="me-auto">
                  <Nav.Link
                    className={`text-center ${choice === 1 ? "active" : ""}`}
                    style={{ color: "white" }}
                    onClick={() => {
                      setChoice(1);
                    }}
                  >
                    User Info
                  </Nav.Link>
                  <Nav.Link
                    className={`text-center ${choice === 2 ? "active" : ""}`}
                    style={{ color: "white" }}
                    onClick={() => {
                      setChoice(2);
                    }}
                  >
                    Past Orders
                  </Nav.Link>
                  <Nav.Link
                    className={`text-center ${choice === 3 ? "active" : ""}`}
                    style={{ color: "white" }}
                    onClick={() => {
                      setChoice(3);
                    }}
                  >
                    Social Media Trends
                  </Nav.Link>
                </Nav>
              </Container>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Container>
        {choice === 1 ? (
          <UserInfo
            userInfo={props.userInfo}
            updateUserInfo={props.updateUserInfo}
            change={setChange}
          />
        ) : null}
        {choice === 2 ? (
          <PastOrders
            updateUserPastOrders={props.updateUserPastOrders}
            change={setChange}
          />
        ) : null}
        {choice === 3 ? <SocialMediaTrends change={setChange} /> : null}
      </Container>
    </>
  );
}

export default Header;

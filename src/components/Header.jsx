import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ImageAvatars from "./Avatar";
import PastOrders from "./PastOrders";
import SocialMediaTrends from "./SocialMediaTrends";
import { useState, React } from "react";
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
        style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
      >
        <Navbar
          bg="primary"
          variant="dark"
          className="justify-content-center" // Center-align the Navbar content
          style={{
            borderRadius: "100px",
            width: "80vw",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adding shadow

          }}
        >
          <div
            className="d-flex align-items-center" // Center-align the ImageAvatars component
          >
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
                  style={{ color: "white" }}
                  onClick={() => {
                    setChoice(1);
                  }}
                >
                  User Info
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={() => {
                    setChoice(2);
                  }}
                >
                  Past Orders
                </Nav.Link>
                <Nav.Link
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

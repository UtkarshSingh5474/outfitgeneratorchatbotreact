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
      <div className="main" style={{ marginTop: "30px", marginLeft: "10vw" }}>
        <Navbar
          bg="primary"
          data-bs-theme="dark"
          style={{ borderRadius: "100px!important", width: "80vw" }}
        >
          <ImageAvatars />
          <div
            className="line"
            style={{
              borderLeft: "6px solid white",
              height: "40px",
              marginLeft: "20px",
            }}
          ></div>
          <Container>
            {/* <UserInfo /> */}
            {/* <PastOrders /> */}
            {/* <SocialMediaTrends /> */}

            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  setChoice(1);
                }}
              >
                User Info
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setChoice(2);
                }}
              >
                Past Orders
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setChoice(3);
                }}
              >
                Social Media Trends
              </Nav.Link>

              {choice === 1 ? (
                <UserInfo
                  userInfo={props.userInfo}
                  updateUserInfo={props.updateUserInfo}
                  change={setChange}
                />
              ) : null}
              {choice === 2 ? <PastOrders change={setChange} /> : null}
              {choice === 3 ? <SocialMediaTrends change={setChange} /> : null}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;

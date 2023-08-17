import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import RadioButtons from "./RadioButtons";

// Define CSS constants
const popupContainerStyle = {
  textAlign: "center",
  backgroundColor: "rgba(39, 145, 216, 0.710)",
  width: "50%",
  position: "absolute",
  top: "10vh",
  zIndex: 1000000,
};

const popupStyle = {
  height: "500px",
  width: "100%",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  right: "20%",
  zIndex: 100,
  backgroundColor: "#C0C0C0",
  borderRadius: "15px",
};

const popupHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 30px 0 15px",
  borderBottom: "2px solid black",
};

function UserInfo(props) {
  const [popup, setPop] = useState(false);
  const [age, setAge] = useState(""); // Local state for age
  const [city, setCity] = useState(""); // Local state for city
  const [sex, setSex] = useState(""); // Local state for sex

  const closePopup = () => {
    props.change(null);
  };
  const handleSubmit = () => {
    console.log(props.userInfo);
    // Construct the new userInfo object
    const newUserInfo = {
      Age: age, // Update age
      City: city, // Update city
      Sex: sex, // Update sex
    };

    props.updateUserInfo(JSON.stringify(newUserInfo)); // Call the callback to update the userInfo

    // Clear the local state
    setAge("");
    setCity("");
    setSex("");

    closePopup();
  };

  return (
    <div>
      <div>
        <div style={popupContainerStyle} className="popup">
          <div style={popupStyle} className="popup">
            <div style={popupHeaderStyle} className="popup-header">
              <h1>Set User Info</h1>
              <h1 onClick={closePopup} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
            <br />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <br />
            <RadioButtons
              selectedValue={sex}
              handleChange={(value) => setSex(value)}
            />
            <br />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;

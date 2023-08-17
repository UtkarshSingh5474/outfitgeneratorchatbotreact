import React, { useEffect, useState } from "react";
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

function PastOrders(props) {
    const [custompastorderinformation, setCustomPastOrderInformation] = useState("");

  const handleSubmit = () => {
    

    props.updateUserPastOrders(JSON.stringify(custompastorderinformation));
    setCustomPastOrderInformation("");
    closePopup();
  };
  const closePopup = () => {
    props.change(null);
  };
  return (
    <div>
      <div>
        <div style={popupContainerStyle} className="popup">
          <div style={popupStyle} className="popup">
            <div style={popupHeaderStyle} className="popup-header">
              <h1>Past Orders</h1>
              <h1 onClick={closePopup} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
            <br />
            <br />
            <TextField
              style={{ width: "80%", height: "80%", minHeight: "80%" }}
              id="outlined-basic"
              label="Custom Past Order Information"
              variant="outlined"
              value={custompastorderinformation}
              onChange={(e) => setCustomPastOrderInformation(e.target.value)}
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

export default PastOrders;

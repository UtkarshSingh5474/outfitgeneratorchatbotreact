import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
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
  left: "25%",
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

function TrendList() {
  const [trends, setTrends] = useState([]);
  function getTrends() {
    const data = ["a", "b", "c"];
    setTrends(data);
  }
  useEffect(() => {
    getTrends();
  }, []);
  return (
    <>
      {trends.map((trend) => {
        return (
          <div key={trend}>
            <h1>{trend}</h1>
          </div>
        );
      })}
    </>
  );
}

function SocialMediaTrends(props) {
  const closePopup = () => {
    props.change(null);
  };

  return (
    <div>
      <div>
        <div style={popupContainerStyle} className="popup">
          <div style={popupStyle} className="popup">
            <div style={popupHeaderStyle} className="popup-header">
              <h1>Social Media Trends</h1>
              <h1 onClick={closePopup} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
            <TrendList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaTrends;

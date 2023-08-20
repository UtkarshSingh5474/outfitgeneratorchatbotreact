import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import RadioButtons from "./RadioButtons";
import "./blurEffect.css";

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

function SocialMediaTrends(props) {
  const [newSocialMediaTrendInfo, setSocialMediaTrendInfo] = useState(`Latest Indian Fashion Trends:
  - Vibrant colors
  - Intricate embroidery
  - Modern designs
  - Bold and bright shades
  - Festive hues
  - Lehenga trends
  - Sustainable fashion
  - Floral prints
  - Bold hues
  - Statement sleeves
  - Fusion fashion
  - Ruffled sarees
  - Adding tiers or layers to lehengas and floor-length anarkali gowns.
`);

  const handleSubmit = () => {
    props.updateSocialMediaTrendInfo(JSON.stringify(newSocialMediaTrendInfo));
    setSocialMediaTrendInfo("");
    closePopup();
  };
  const closePopup = () => {
    props.change(null);
  };

  return (
    <div>
      <div>
        <div style={popupContainerStyle} className="popup">
          <div style={popupStyle} className="popup blurEffect">
            <div style={popupHeaderStyle} className="popup-header">
              <h1>Social Media Trends</h1>
              <h1 onClick={closePopup} style={{ cursor: "pointer" }}>
                X
              </h1>
            </div>
            <br />
            <br />

            <div className="flex">
              <TextField
                multiline
                rows={12}
                style={{ width: "80%", height: "80%", minHeight: "80%" }}
                id="outlined-basic"
                label="Social Media Trend Information"
                variant="outlined"
                value={newSocialMediaTrendInfo}
                onChange={(e) => setSocialMediaTrendInfo(e.target.value)}
              >dasasdas
              </TextField>

              <br />
              <br />
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaTrends;

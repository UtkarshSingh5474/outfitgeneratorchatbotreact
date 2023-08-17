import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import RadioButtons from "./RadioButtons";

// Define CSS constants
const popupContainerStyle = {
    textAlign: "center",
    backgroundColor: "rgba(39, 145, 216, 0.710)",
    width: "100%",
    position: "absolute",
    top: "10vh",
    zIndex: 1000000,
};

const popupStyle = {
    height: "500px",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: "25%",
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

function PopUp() {
    const [popup, setPop] = useState(false);

    const handleClickOpen = () => {
        setPop(true);
    };

    const closePopup = () => {
        setPop(false);
    };

    const handleSubmit = () => {
        // Add your submit logic here
        // For now, we'll just close the popup
        closePopup();
    };

    return (
        <div>
            <button onClick={handleClickOpen}>User Info</button>
            <div>
                {popup ? (
                    <div style={popupContainerStyle} className="popup">
                        <div style={popupStyle} className="popup">
                            <div style={popupHeaderStyle} className="popup-header">
                                <h1>Set User Info</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Age"
                                variant="outlined"
                                style={{}}
                            />
                            <br />
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                style={{}}
                            />
                            <br />
                            <br />
                            <RadioButtons />
                            <br />
                            <br />
                            <Button onClick={handleSubmit} variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default PopUp;

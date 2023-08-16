import React, { useState }  from "react";
import './Popup.css';
import { TextField } from "@mui/material";
import RadioButtons from "./RadioButtons";


function PopUp(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div>
            <button onClick={handleClickOpen}>User Info</button>
            <div>
                {
                    popup?
                    <div className="main2">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Set User Info</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <br />
                            <TextField id="outlined-basic" label="Age" variant="outlined" style={{}}/>
                            <br />
                            <br />
                            <TextField id="outlined-basic" label="City" variant="outlined" style={{}}/>
                            <br />
                            <br />
                            <RadioButtons/>


                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default PopUp;
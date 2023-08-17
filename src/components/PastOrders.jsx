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

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    function getOrders() {
        const data = ["a", "b", "c"];
        setOrders(data);
    }
    useEffect(() => {
        getOrders();
    }, []);
    return (
        <>
            {
                orders.map((order) => {
                    return (
                        <div key={order}>
                            <h1>{order}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}
function PastOrders(props) {
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
                            <h1 onClick={closePopup} style={{ cursor: "pointer" }}>X</h1>
                        </div>
                        <OrderList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastOrders;

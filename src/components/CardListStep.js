import { Button } from "@mui/material";
import React from "react";

class CardListStep extends React.Component {
  componentDidMount() {
    // Automatically trigger the next step after 5 seconds
    setTimeout(() => {
      this.props.triggerNextStep({
        value: "Card list displayed successfully!",
        trigger: "userInput",
      });
    }, 5000); // 5000 milliseconds (5 seconds)
  }

  render() {
    const { previousStep } = this.props;
    const apiData = previousStep.value;

    const cardStyle = {
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      width: "200px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      display: "flex", // Display as a flex container
      flexDirection: "column", // Stack the elements vertically
    };
    

    const headingStyle = {
      fontSize: "12px",
      marginTop: "10px",
      lineHeight: "1.2", // Adjust this value as needed for the desired line height
      maxHeight: "2.4em", // Set a max height for 2 lines of text
      minHeight: "2.4em", // Set a min height for 2 lines of text
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    };
    

    const priceStyle = {
      fontWeight: "",
    };

    const linkStyle = {
      display: "block",
      textAlign: "center",
      backgroundColor: "yellow",
      color: "red",
      height: "30px",
      width: "100%", // Set the width to 100% to ensure it fits within the card
      justifyContent: "center!important",
      marginTop: "auto", // Add space at the top
      borderTop: "1px solid #ccc", // Add a border at the top
    };
    

    const imageStyle = {
      minWidth: "150px", // Set the minimum width for the image
      minHeight: "150px", // Set the minimum height for the image
      maxWidth: "150px", // Set the maximum width for the image
      maxHeight: "150px", // Set the maximum height for the image
      width: "auto", // Allow the width to adjust based on the image aspect ratio
      height: "auto", // Allow the height to adjust based on the image aspect ratio
      margin: "0 auto",
      display: "block",
    };
    

    const viewSimilarStyle = {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "5px 10px",

      marginTop: "100px",
      borderRadius: "5px",
      cursor: "pointer",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    const containerStyle = {
      marginBottom: "40px", // Add some margin at the bottom
    };

    return (
      <div style={containerStyle}>
        {Object.keys(apiData).map((category, index) => (
          <div key={index}>
            <h2 style={{fontSize:"24px",marginTop:"10px"}}>{category}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {apiData[category].topResults.slice(0, 5).map((item, i) => (
                <div style={cardStyle} className="cardStyle" key={i}>
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      style={imageStyle}
                    />
                  )}
                  <h3 style={headingStyle}>{item.name}</h3>
                  <p style={priceStyle}>Price: ₹{item.current_price}</p>
                  <Button
                    style={linkStyle}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Product
                  </Button>
                </div>
              ))}
              <Button
                href={apiData[category].searchLink}
                target="_blank"
                rel="noopener noreferrer"
                style={viewSimilarStyle}
              >
                View Similar
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CardListStep;

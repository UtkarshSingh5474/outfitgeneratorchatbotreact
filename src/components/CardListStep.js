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
    };

    const headingStyle = {
      fontSize: "1px",
      marginTop: "10px",
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

      justifyContent: "center!important",
    };

    const imageStyle = {
      width: "100px",
      height: "100px",
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
      marginTop: "20px", // Add some margin at the top
      marginBottom: "40px", // Add some margin at the bottom
    };

    return (
      <div style={containerStyle}>
        {Object.keys(apiData).map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
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
                  <a
                    style={linkStyle}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Product
                  </a>
                </div>
              ))}
              <a
                href={apiData[category].searchLink}
                target="_blank"
                rel="noopener noreferrer"
                style={viewSimilarStyle}
              >
                View Similar
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CardListStep;

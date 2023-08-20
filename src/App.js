import React from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import CardListStep from "./components/CardListStep/CardListStep";
import {
  getCombinedOutfitTextWithSearchResultsApiRequest
} from "./libs/api";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var chatbotKey = 0; // Key to trigger re-render

// Define initial system behavior and user information
var chatbotBehaviour =
  "Your name is: StyleGenie - As a Fashion Outfit Generator Chatbot, Generate a outfit according to the user message. Specify all the clothing item seperatly by number in detail Specify color and other properties. Consider and remember the userInfo, userPastOrders, socialMediaTrendInfo.";
var userInfo = "Age:26, Sex:Female, BodyType:Fit, City:Delhi";
var userPastOrders = "";
var socialMediaTrendInfo = `Latest Indian Fashion Trends:
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
`;

// Define the initial system message based on your variables
var initialSystemMessage = {
  role: "system",
  content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
};

var messages = [initialSystemMessage]; // Initialize messages array with initial system message

class Chatbot extends React.Component {
  // State to manage user information and past orders
  state = {
    userInfo: userInfo,
    userPastOrders: userPastOrders,
    socialMediaTrendInfo: socialMediaTrendInfo,
    chatbotKey: chatbotKey,
  };

  // Callback function to update user information
  updateUserInfoCallback = (newUserInfo) => {
    this.setState({
      userInfo: newUserInfo,
      chatbotKey: this.state.chatbotKey + 1, // Trigger re-render
    });
    userInfo = newUserInfo;
    // Update the initial system message
    initialSystemMessage = {
      role: "system",
      content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
    };
    messages = [initialSystemMessage]; // Reset chat history

    // Display success toast
    toast.success(
      "User Information Updated Successfully!\nChat History is resetted",
      {
        // Toast configuration
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  // Callback function to update social media trends information
  updateSocialMediaTrendInfoCallback = (newSocialMediaTrendInfo) => {
    this.setState({
      socialMediaTrendInfo: newSocialMediaTrendInfo,
      chatbotKey: this.state.chatbotKey + 1,
    });
    socialMediaTrendInfo = newSocialMediaTrendInfo;
    // Update the initial system message
    initialSystemMessage = {
      role: "system",
      content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
    };

    messages = [initialSystemMessage]; // Reset chat history

    // Display success toast
    toast.success(
      "Social Media Trend Information Updated Successfully!\nChat History is resetted",
      {
        // Toast configuration
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };
  // Callback function to update user past orders
  updateUserPastOrders = (customPastOrderInformation) => {
    this.setState({
      userPastOrders: customPastOrderInformation,
      chatbotKey: this.state.chatbotKey + 1,
    });
    userPastOrders = customPastOrderInformation;
    // Update the initial system message
    initialSystemMessage = {
      role: "system",
      content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
    };
    messages = [initialSystemMessage]; // Reset chat history

    // Display success toast
    toast.success(
      "Past Order Updated Successfully!\nChat History is resetted",
      {
        // Toast configuration
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  render() {
    // Chatbot steps configuration
    const steps = [
      {
        id: "1",
        message:
          "Hello, I am StyleGenie – your virtual fashion companion, here to redefine your shopping experience through personalized outfit recommendations and engaging conversations.\nHow may i assist you today?",
        trigger: "userInput",
      },
      {
        id: "userInput",
        user: true,
        trigger: "getResponse",
      },
      {
        id: "getResponse",
        component: <ApiResponseStep />,
        asMessage: true,
        waitAction: true,
        trigger: "showCardList",
      },
      {
        id: "showCardList",
        component: <CardListStep />,
        waitAction: true,
        trigger: "userInput",
      },
    ];

    // Render the Chatbot component
    return (
      <div className="root">
        <ToastContainer />
        {/* Header component */}
        <Header
          userInfo={this.state.userInfo}
          userPastOrders={this.state.userPastOrders}
          updateUserInfo={this.updateUserInfoCallback}
          updateUserPastOrders={this.updateUserPastOrders}
          updateSocialMediaTrendInfo={this.updateSocialMediaTrendInfoCallback}
        />
        <div className="chatbot-container">
          <ChatBot
            key={this.state.chatbotKey}
            // Chatbot configuration
            submitButtonStyle={{ backgroundColor: "#FADB22" }}
            botAvatar="https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-11664325137typezbr9k9.png"
            headerTitle="StyleGenie - Fashion Outfit Generator Chatbot"
            className="chatbot"
            hideHeader={false}
            customStyle={{
              // Apply custom styles for the chatbot container
              background: "transparent", // Completely transparent background
              boxShadow: "none", // No box shadow
              border: "none", // No border
            }}
            style={{
              height: "80vh", // Increase the height for desktop
              width: "100%", // Adjust the width to your preference
              margin: "0 auto", // Center horizontally
            }}
            steps={steps}
            handleEnd={() => console.log("Chat ended")}
          />
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            {/* Due to trial credits of OpenAI API, the response is slow. */}
          </p>
        </div>
      </div>
    );
  }
}

// Component for displaying API response
class ApiResponseStep extends React.Component {
  state = {
    message: "Generating the best outfit for you! Please wait",
  };

  async componentDidMount() {
    const { previousStep, triggerNextStep } = this.props;
    // User input for API request
    const userInput = {
      role: "user",
      content: previousStep.value,
    };
    // Add user input to messages array
    messages.push(userInput);
    // Display logs for debugging

    // API request to get outfit information
    console.log("messages", messages);

    getCombinedOutfitTextWithSearchResultsApiRequest(messages, userInfo)
      .then((response) => {
        console.log("response:", response);
        // Format API response
        const outfitOverview = response.outfitOverview;
        let formattedMessage = outfitOverview.replace(/\n/g, "<br />");
        formattedMessage = formattedMessage.replace(
          /(\d+\.\s*[^:]+)(:)/g,
          "<strong>$1</strong>$2"
        );
        const message = formattedMessage;

        // Assistant's response
        const modelResponse = {
          role: "assistant",
          content: message,
        };
        messages.push(modelResponse); // Add model response to messages array

        this.setState({ message }, () => {
          if (message.includes("1.")) {
            // Trigger next step to show clothing options
            triggerNextStep({
              value: response.clothingItems,
              trigger: "showCardList",
            });
          } else {
            // Trigger next step for user input
            triggerNextStep({
              trigger: "userInput",
            });
          }
        });
      })
      .catch((error) => {
        console.error("API request error:", error);
        // Handle error and trigger next step
        this.setState({ message: "Oops! An error occurred." }, () => {
          triggerNextStep({
            value: "Oops! An error occurred.",
            trigger: "userInput",
          });
        });
      });
  }

  render() {
    return (
      <div className="responseMessage">
        <div dangerouslySetInnerHTML={{ __html: this.state.message }} />
      </div>
    );
  }
}

export default Chatbot;

// Component with background
// customStyle={{
//   // Apply custom styles for the chatbot container
//   width: "fit-content", // Set width to fit inner content
//   margin: "0 auto", // Center horizontally
//   marginBottom: "40px",
//   background: "rgba(0, 0, 0, 0)", // Transparent background
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Optional: Add a shadow for better visibility
//   borderRadius: "10px", // Rounded corners
// }}

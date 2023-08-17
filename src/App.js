import React from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import CardListStep from "./components/CardListStep";
import { getCombinedOutfitTextWithSearchResultsApiRequest } from "./api";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


var chatbotBehaviour =
  "As a Fashion Outfit Generator Chatbot, Generate a outfit according to the user message. Specify all the clothing item seperatly by number in detail Specify color and other properties. Consider and remember the userInfo, userPastOrders, socialMediaTrendInfo.";

var userInfo = "Name:Rishabh ,Age:26, Sex:Male, BodyType:Fit, City:Ghaziabad";
//var userPastOrders = "Purchase History: Aug 5, 2023 - ₹8,700.00: Floral Print Dress (Biba) - ₹5,000.00, White Sneakers (U.S. Polo ASSN) - ₹3,700.00; Jul 20, 2023 - ₹5,546.40: Striped T-shirt (Allen Solly) - ₹1,960.00, Denim Shorts (Indigo Nation) - ₹3,586.40; Jun 10, 2023 - ₹6,162.50: Summer Hat (Global desi) - ₹1,500.00, Sunglasses (Vero Moda) - ₹2,362.50, Beach Towel (Levi’s) - ₹2,300.00; May 2, 2023 - ₹9,104.70: Blue Jeans (Louis Philippe) - ₹4,000.00, Graphic Print T-shirt (Only) - ₹1,625.90, Sneakers (Lombard) - ₹3,478.80; Apr 15, 2023 - ₹13,230.00: Evening Gown (Label Ritu Kumar) - ₹11,000.00, Clutch Bag (AccessorizeMe) - ₹2,230.00.";
var userPastOrders = "";
var socialMediaTrendInfo = "";
// Define the initial system message based on your variables
var initialSystemMessage = {
  role: "system",
  content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
};

var messages = [initialSystemMessage]; // Initialize messages array with initial system message

class Chatbot extends React.Component {
  state = {
    userInfo: userInfo,
    userPastOrders:userPastOrders // Initialize userInfo in the state
  };

  updateUserInfoCallback = (newUserInfo) => {
    this.setState({ userInfo: newUserInfo });

    userInfo = newUserInfo;

    initialSystemMessage = {
      role: "system",
      content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
    };

    messages = [initialSystemMessage];
    toast.success('User Information Updated Successfully!\nChat History is resetted', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  updateUserPastOrders = (customPastOrderInformation) => {
    this.setState({ userPastOrders: customPastOrderInformation });

    userPastOrders = customPastOrderInformation;

    initialSystemMessage = {
      role: "system",
      content: `${chatbotBehaviour},userInfo:${userInfo},userPastOrders:${userPastOrders},socialMediaTrendInfo:${socialMediaTrendInfo}`,
    };

    messages = [initialSystemMessage];
    toast.success('Past Order Updated Successfully!\nChat History is resetted', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  render() {
    const steps = [
      {
        id: "1",
        message: "Hi there! How can I assist you today?",
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

    return (
      <div className="root">
        <ToastContainer/>

        <Header
          userInfo={this.state.userInfo}
          userPastOrders={this.state.userPastOrders}
          updateUserInfo={this.updateUserInfoCallback}
          updateUserPastOrders={this.updateUserPastOrders}
        />
        <ChatBot
        submitButtonStyle={{backgroundColor:"#FADB22"}}
        botAvatar="https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-11664325137typezbr9k9.png"
          headerTitle="Fashion Outfit Generator Chatbot"
          style={{ width: "90%", height: "80vh", top: "5vh", left: "5vw" }}
          steps={steps}
          handleEnd={() => console.log("Chat ended")}
        />
      </div>
    );
  }
}
class ApiResponseStep extends React.Component {
  state = {
    message: "Generating the best outfit for you! Please wait",
  };

  async componentDidMount() {
    const { previousStep, triggerNextStep } = this.props;

    const userInput = {
      role: "user",
      content: previousStep.value,
    };

    //add userInput to messages array
    messages.push(userInput); // Add user input to messages array
    console.log("orderSent:", userPastOrders);
    console.log("messageSent:", messages);

    // Get the combined outfit with search results text from the API
    //send messages array to this function argument
    getCombinedOutfitTextWithSearchResultsApiRequest(messages, userInfo)
      .then((response) => {
        console.log("response:", response);
        const outfitOverview = response.outfitOverview;
        let formattedMessage = outfitOverview.replace(/\n/g, "<br />");
        formattedMessage = formattedMessage.replace(
          /(\d+\.\s*[^:]+)(:)/g,
          "<strong>$1</strong>$2"
        );
        const message = formattedMessage;

        const modelResponse = {
          role: "assistant",
          content: message,
        };

        messages.push(modelResponse); // Add model response to messages array

        //add modelResponse to messages array

        this.setState({ message }, () => {
          if (message.includes("1.")) {
            console.log("clothing not empty");
            triggerNextStep({
              value: response.clothingItems,
              trigger: "showCardList",
            });
          } else {
            console.log("clothing empty");
            triggerNextStep({
              trigger: "userInput",
            });
          }
        });
      })
      .catch((error) => {
        console.error("API request error:", error);

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

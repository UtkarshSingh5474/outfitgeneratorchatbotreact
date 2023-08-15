import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { getCombinedOutfitText } from './api';

class Chatbot extends React.Component {
  render() {
    const steps = [
      {
        id: '1',
        message: 'Hi there! How can I assist you today?',
        trigger: 'userInput',
      },
      {
        id: 'userInput',
        user: true,
        trigger: 'getResponse',
      },
      {
        id: 'getResponse',
        component: <ApiResponseStep />,
        asMessage: true,
        waitAction: true,
        trigger: 'showCardList',
      },
      {
        id: 'showCardList',
        component: <CardListStep />,
        waitAction: true,
        trigger: 'userInput',
      },
    ];

    return (
      <ChatBot
        style={{ width: '100%' }}
        steps={steps}
        handleEnd={() => console.log('Chat ended')}
      />
    );
  }
}

class ApiResponseStep extends React.Component {
  state = {
    message: 'Generating the best outfit for you! Please wait',
  };

  componentDidMount() {
    const { previousStep, triggerNextStep } = this.props;

    getCombinedOutfitText(previousStep.value)
      .then((response) => {
        const outfitOverview = response.outfitOverview;
        let formattedMessage = outfitOverview.replace(/\n/g, '<br />');
        formattedMessage = formattedMessage.replace(
          /(\d+\.\s*[^:]+)(:)/g,
          '<strong>$1</strong>$2'
        );
        const message = formattedMessage;


        this.setState({ message }, () => {
          triggerNextStep({
            value: response.clothingItems,
            trigger: 'showCardList',
          });
        });
      })
      .catch((error) => {
        console.error('API request error:', error);

        this.setState({ message: 'Oops! An error occurred.' }, () => {
          triggerNextStep({
            value: 'Oops! An error occurred.',
            trigger: 'showCardList',
          });
        });
      });
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.message }} />
      </div>
    );
  }
}

class CardListStep extends React.Component {
  componentDidMount() {
    // Automatically trigger the next step after 5 seconds
    setTimeout(() => {
      this.props.triggerNextStep({
        value: 'Card list displayed successfully!',
        trigger: 'userInput',
      });
    }, 5000); // 5000 milliseconds (5 seconds)
  }

  render() {
    const { previousStep } = this.props;
    const apiData = previousStep.value;

    const cardStyle = {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      width: '200px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
      marginTop: '0',
    };

    const priceStyle = {
      fontWeight: 'bold',
    };

    const linkStyle = {
      display: 'block',
      textAlign: 'center',
      marginTop: '10px',
    };

    const imageStyle = {
      width: '100px',
      height: '100px',
      margin: '0 auto',
      display: 'block',
    };

    const viewSimilarStyle = {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      marginTop: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
      <div>
        {Object.keys(apiData).map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {apiData[category].topResults.slice(0, 5).map((item, i) => (
                <div style={cardStyle} key={i}>
                  <img
                    src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/i/l/h/l-nairakurta-glomee-original-imagnur6jvrzt6gz.jpeg?q=70"
                    alt="Placeholder"
                    style={imageStyle}
                  />
                  <h3 style={headingStyle}>{item.name}</h3>
                  <p style={priceStyle}>Price: ${item.current_price}</p>
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






export default Chatbot;

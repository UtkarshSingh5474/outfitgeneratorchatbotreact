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
    }, 500); 
  }
  render() {
    const { previousStep, triggerNextStep } = this.props;
    const apiData = previousStep.value;

    const cardStyle = {
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    };

    const headingStyle = {
      marginTop: '0',
      fontSize: '18px',
      marginBottom: '10px',
    };

    const priceStyle = {
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '10px',
    };

    const linkStyle = {
      display: 'block',
      textAlign: 'center',
      fontSize: '14px',
      color: '#007bff',
      textDecoration: 'none',
    };

    const viewSimilarStyle = {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 12px',
      marginTop: '10px',
      cursor: 'pointer',
      display: 'inline-block',
      textDecoration: 'none',
    };

    const categoryContainerStyle = {
      marginBottom: '20px',
    };

    return (
      <div>
        {Object.keys(apiData).map((category, index) => (
          <div style={categoryContainerStyle} key={index}>
            <h2>{category}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {apiData[category].topResults.slice(0, 4).map((item, i) => (
                <div style={cardStyle} key={i}>
                  <h3 style={headingStyle}>{item.name}</h3>
                  <p style={priceStyle}>Price: Rs{item.current_price}</p>
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
            </div>
            <a
              href={apiData[category].searchLink}
              target="_blank"
              rel="noopener noreferrer"
              style={viewSimilarStyle}
            >
              View Similar Products
            </a>
          </div>
        ))}
      </div>
    );
  }
}





export default Chatbot;

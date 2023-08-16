import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import CardListStep from './components/CardListStep';
import ApiResponseStep from './components/ApiResponseStep';


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
        style={{ width: '90%', height: '80vh', top:'10vh', left:'5vw'}}
        steps={steps}
        handleEnd={() => console.log('Chat ended')}
      />
    );
  }
}










export default Chatbot;


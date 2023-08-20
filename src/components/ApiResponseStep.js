import React from 'react';
import { getCombinedOutfitTextWithSearchResultsApiRequest } from '../api';

class ApiResponseStep extends React.Component {
    state = {
      message: 'Generating the best outfit for you! Please wait',
    };
    //make an array of messages
    
  
    async componentDidMount() {
      const { previousStep, triggerNextStep, addMessageToHistory, messages,userInfo } = this.props;

      const userInput={
        role: 'user',
        content: previousStep.value,
      }
      await addMessageToHistory(userInput.role, userInput.content);


      // Get the combined outfit with search results text from the API
      getCombinedOutfitTextWithSearchResultsApiRequest(messages,userInfo)
        .then((response) => {

          const outfitOverview = response.outfitOverview;
          let formattedMessage = outfitOverview.replace(/\n/g, '<br />');
          formattedMessage = formattedMessage.replace(
            /(\d+\.\s*[^:]+)(:)/g,
            '<strong>$1</strong>$2'
          );
          const message = formattedMessage;
  
          const modelResponse = {
            role: 'assistant',
            content: message,
          };
      
          addMessageToHistory(modelResponse.role, modelResponse.content);
  
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

  export default ApiResponseStep; 
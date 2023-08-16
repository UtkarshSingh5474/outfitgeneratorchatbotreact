import React from 'react';
import { getCombinedOutfitText } from '../api';

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

  export default ApiResponseStep;
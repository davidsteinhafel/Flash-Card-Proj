import React from 'react';
import {SubmitCard} from './Server';
class SubmitNew extends React.Component {
  state= {
      id: '',
      Word: '',
      Definition: '',
      StackId: ''
  };
  handleInputChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({[name]: value})
  };

  handleSubmitClick = () => {
      const {Word, Definition, StackId} = this.state;
      SubmitCard({Word,Definition,StackId}).then()
  }


  render(){
      return(
          <div>
              <select onChange={this.handleInputChange}></select>
              <input type='text' name='Word' onChange={this.handleInputChange} />
              <div>
                  {this.state.word}
              </div>
              <input type='text' name='Definition' onChange={this.handleInputChange} />
              <button onClick={this.handleSubmitClick}>Submit</button>
          </div>
      )
  }
}
export default SubmitNew;
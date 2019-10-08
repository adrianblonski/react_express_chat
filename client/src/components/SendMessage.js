import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SendMessage extends Component {
  state = {
    isName: false,
    message: ''
  };

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.isName) {
      if(this.state.message.length > 15 || this.state.message.length < 5) {
        alert("Your nickname should be between 5 - 15 characters");
      } else {
        this.props.setUsername(this.state.message);
        this.setState({
          isName: true,
          message: ''
        })
      }
      return;
    }

    this.props.sendMessage(this.state.message);
    this.setState({
      isName: this.state.isName,
      message: ''
    });
  }

  inputPlaceholder = () => {
    return this.state.isName ? "Type something..." : "Enter your name";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          className="inpt"
          type="text" 
          name="message" 
          style={{flex: '10', padding: '5px'}}
          placeholder={this.inputPlaceholder()}
          value={this.state.message}
          onChange={this.onChange}
        />
        <input 
          type="submit"
          value=">"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

SendMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired
}

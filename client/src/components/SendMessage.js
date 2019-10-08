import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SendMessage extends Component {
  state = {
    message: ''
  };

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage("Adrian", this.state.message);
    this.setState({message: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          className="inpt"
          type="text" 
          name="message" 
          style={{flex: '10', padding: '5px'}}
          placeholder="Type something..."
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
  sendMessage: PropTypes.func.isRequired
}

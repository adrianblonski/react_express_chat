import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageItem extends Component {
  render() {
    const {author, content} = this.props.message;

    return (
      <div className="message" style={messageStyle}>
        <span style={authorStyle}>{author}</span>
        <span style={contentStyle}>{content}</span>
      </div>
    )
  }
}

const messageStyle = {
  borderBottom: '1px solid #EEE',
  paddingTop: '10px'
}

const authorStyle = {
  color: '#888',
  paddingRight: '10px'
};

const contentStyle = {
  color: '#333'
}

// PropTypes
MessageItem.propTypes = {
  message: PropTypes.object.isRequired
}

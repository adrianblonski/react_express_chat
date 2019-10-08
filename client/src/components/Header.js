import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Happy chatting{this.props.username !== "Guest" ? `, ${this.props.username}` : ``}</h1>
      </header>
    )
  }
}

const headerStyle = {
  color: '#333',
  textAlign: 'center',
  padding: '10px',
  borderBottom: '5px solid #333'
}

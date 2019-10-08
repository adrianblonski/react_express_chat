import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Happy chatting</h1>
    </header>
  )
}

const headerStyle = {
  color: '#333',
  textAlign: 'center',
  padding: '10px',
  borderBottom: '5px solid #333'
}

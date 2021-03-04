import React from "react";

const DefaultValue = ({children}) => (
  <span
    style={{
      backgroundColor: "#aaa",
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
      font: 'Roboto' ,
    }}>
    {children}
  </span>
);

export default DefaultValue;
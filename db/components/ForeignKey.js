import React from "react";

const ForeignKey = ({to, label}) => (
  <span
    style={{
      backgroundColor: "#bae2e8",
      borderRadius: '2px',
      color: '#000',
      padding: '0.2rem',
      font: 'Roboto' ,
    }}>
    <strong>FK : </strong> <a href={to}>{label}</a>
  </span>
);

export default ForeignKey;
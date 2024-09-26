import React from "react";
import Card from "./Card";
import '../styles/Column.css';
import threeDot from '../Assets/3-dot-menu.svg';
import add from '../Assets/add.svg'

const Column = ({  title, tickets, getUserName, imageSrc }) => {
  return (
    <div className="column">
    <div className="header">
    <div className="title-logo">
      <img src={imageSrc} alt={title} />
      <h2 className="title">{title}</h2>
      <p>{tickets.length}</p>
    </div>
    <div className="edit-logos">
      <img src={add}></img>
      <img src={threeDot} ></img>
    </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} getUserName={getUserName} title={title} />
      ))}
    </div>
  );
};

export default Column;

import React from "react";
import '../styles/Card.css';
import highPriorityImage from '../Assets/High Priority.svg';
import mediumPriorityImage from '../Assets/Medium Priority.svg';
import lowPriorityImage from '../Assets/Low Priority.svg';
import urgentImage from '../Assets/Urgent.svg'
import noPriorityImage from '../Assets/No-priority.svg'
import userImg from '../Assets/user.svg'

const Card = ({ title, ticket, getUserName }) => {
  let priorityImage;
  switch (ticket.priority) {
    case 4: 
      priorityImage = urgentImage;
      break;
    case 3:
      priorityImage = highPriorityImage;
      break;
    case 2:
      priorityImage = mediumPriorityImage;
      break;
    case 1:
      priorityImage = lowPriorityImage;
      break;
      case 0:
        priorityImage = noPriorityImage;
        break;
    default:
      priorityImage = null; 
  }

  return (
    <div className="card">
    <div className="card-header">
      <p className="id">{ticket.id}</p>
      <img src = {userImg}></img>
    </div>
      <h5>{ticket.title}</h5> 
     <div className="details">
      <img src={priorityImage} alt={ticket.priority || 'Priority'} className="priority-icon" /> {/* Add alt text for accessibility */}
      <p className="tag">{ticket.tag}</p>
    </div>
    </div>
  );
};

export default Card;
import React from "react";
import Column from "./Column";
import '../styles/Board.css';
import todoImage from '../Assets/To-do.svg';
import inProgressImage from '../Assets/in-progress.svg';
import doneImage from '../Assets/Done.svg';
import highPriorityImage from '../Assets/High Priority.svg';
import lowPriorityImage from '../Assets/Low Priority.svg';
import noPriorityImage from '../Assets/No-priority.svg';
import mediumPriorityImage from '../Assets/Medium Priority.svg';
import urgentImage from '../Assets/Urgent.svg';
import backlogImage from '../Assets/Backlog.svg';
import cancelledImage from '../Assets/Cancelled.svg';

const Board = ({ groupedTickets, getUserName }) => {
  const groupImageMap = {
    Todo: todoImage,
    'In progress': inProgressImage,
    Done: doneImage,
    High: highPriorityImage,
    Low: lowPriorityImage,
    'No Priority': noPriorityImage,
    Medium: mediumPriorityImage,
    Backlog: backlogImage,
    Cancelled: cancelledImage,
    Urgent: urgentImage,
  };

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <Column
          key={group}
          title={group}
          tickets={groupedTickets[group]}
          getUserName={getUserName}
          imageSrc={groupImageMap[group]} 
        />
      ))}
    </div>
  );
};

export default Board;
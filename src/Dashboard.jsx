import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("none");
  const [sortBy, setSortBy] = useState("none");
  const savedGroupBy = localStorage.getItem("groupBy");
  const savedSortBy = localStorage.getItem("sortBy");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  const groupTickets = (tickets) => {
    const grouped = {};

    
    if (groupBy === "status") {
      const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
      statusOrder.forEach((status) => {
        grouped[status] = tickets.filter((ticket) => ticket.status === status);
      });
    }

    
    else if (groupBy === "user") {
      tickets.forEach((ticket) => {
        const userName = getUserName(ticket.userId);
        if (!grouped[userName]) grouped[userName] = [];
        grouped[userName].push(ticket);
      });
    }

    else if (groupBy === "priority") {
      const priorityLabels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No Priority",
      };
      const priorityOrder = ["Urgent", "High", "Medium", "Low", "No Priority"];

      priorityOrder.forEach((priority) => {
        grouped[priority] = tickets.filter((ticket) => priorityLabels[ticket.priority] === priority);
      });
    }

    return grouped;
  };

  const sortTickets = (tickets) => {
    if (sortBy === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

 
  let groupedTickets = groupTickets(tickets);

 
  if (sortBy) {
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key] = sortTickets(groupedTickets[key]);
    });
  }

  return (
    <div>
      <Navbar groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board groupedTickets={groupedTickets} getUserName={getUserName} />
    </div>
  );
}

export default Dashboard;

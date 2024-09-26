import React, { useState } from "react";
import "../styles/Navbar.css";
import Display from '../Assets/Display.svg'
import Down from '../Assets/down.svg'

const Navbar = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false); 

  return (
    <nav className="navbar">
      <div className="navbar-display">
        <button onClick={() => setIsDisplayOpen(!isDisplayOpen)}>
        <img src={Display}></img>
          Display
          <img src={Down}></img>
        </button>
      </div>

     
      {isDisplayOpen && (
        <div className="navbar-dropdowns">
          <div className="navbar-group">
            <label>Grouping: </label>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="">None</option>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

         
          <div className="navbar-sort">
            <label>Ordering: </label>
            <select
              value={sortBy || ""}
              onChange={(e) => setSortBy(e.target.value || null)}
            >
              <option value="">None</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

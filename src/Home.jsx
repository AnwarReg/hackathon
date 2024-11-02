import React, { useState } from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';
import MainNote from './mainNote';
import "./style.css";

function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="navbar">
        <div className="navbar-left">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropdown"
          >
            <option value="" disabled>Select Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button className="search-button">Search</button>
        </div>
        <Link to="/upload">
          <button className="add-button">Add Note</button>
        </Link>
      </div>
      <MainNote />
    </div>
  );
}

export default Home;

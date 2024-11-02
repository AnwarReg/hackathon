import React, { useState } from 'react';
import Header  from "./Header";
import Note from "./Note";
import { Link } from 'react-router-dom';
import MainNote from './mainNote';
import "./navbar.css"
import "./style.css"


// Components for each option
const Option1Component = () => <div>This is Option 1 component.</div>;
const Option2Component = () => <div>This is Option 2 component.</div>;
const Option3Component = () => <div>This is Option 3 component.</div>;


function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="home-container">
      <Header /> {/* Header component */}
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
      <div><Link to="/note">note test</Link></div>
    </div>
  );
}

export default Home;
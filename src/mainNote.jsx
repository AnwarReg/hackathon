import React from 'react';
import './mainNote.css';

const Note = ({ name }) => {
  return (
    <div className="note-card">
      <div className="note-header">
        <div className="folder-icon">📁</div>
        <div className="note-label">Course</div>
      </div>
      <h2 className="note-title">{name}</h2>
    </div>
  );
};

export default Note;

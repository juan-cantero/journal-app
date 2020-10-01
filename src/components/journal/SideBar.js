import React from 'react';
import JournalEntries from './JournalEntries';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Juan</span>
        </h3>
        <button className="btn">LogOut</button>
      </div>
      <div className="sidebar__new-entry">
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default SideBar;

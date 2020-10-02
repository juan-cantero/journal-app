import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogOut } from '../../actions/authActions';
import JournalEntries from './JournalEntries';

const SideBar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(startLogOut());
  };
  return (
    <aside className="sidebar">
      <div className="sidebar__navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Juan</span>
        </h3>
        <button className="btn" onClick={handleLogOut}>
          LogOut
        </button>
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

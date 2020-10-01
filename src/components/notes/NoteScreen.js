import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  return (
    <div className="note-screen__container">
      <NotesAppBar />

      <div className="note-screen__content">
        <input
          type="text"
          placeholder="some awesome title"
          className="note-screen__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happened today"
          className="note-screen__textarea"
        ></textarea>
        <div className="note-screen__image">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/idaho-farmhouse-creek-stone-wall-landscape-idea-1553018535.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=480:*"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;

import React from 'react';

const JournalEntry = () => {
  return (
    <div className="journal-entry__container pointer">
      <div
        className="jornal-entry__picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://i.pinimg.com/originals/bc/0e/09/bc0e09b8128012312eb392c59f36b9ef.jpg)',
        }}
      ></div>
      <div className="journal-entry__body">
        <p className="journal-entry__title">un nuevo dia</p>
        <p className="journal-entry__content">
          Est anim deserunt et commodo elit pariatur. Consequat minim ex dolore
          proident ipsum amet. Consequat occaecat cillum cillum id anim tempor
          nostrud in tempor.
        </p>
      </div>
      <div className="journal-entry__date-box">
        <span>lunes</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

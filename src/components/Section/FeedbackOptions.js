import React from 'react';
import T from 'prop-types';
import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: T.arrayOf({}).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;

import React from 'react';
import T from 'prop-types';
// import shortid from 'shortid';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // const buttonBar = options.map(option => (
  //   <button
  //     key={shortid.generate()}
  //     type="button"
  //     onClick={() => onLeaveFeedback({ option })}
  //   >
  //     {option}
  //   </button>
  // ));
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback(options[0])}>
        {options[0]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[1])}>
        {options[1]}
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[2])}>
        {options[2]}
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: T.arrayOf({}).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;

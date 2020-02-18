import React from 'react';
import T from 'prop-types';
import FeedbackOptions from './FeedbackOptions';

function Section({ options, title, onLeaveFeedback, statTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <h1>{statTitle}</h1>
    </>
  );
}

Section.propTypes = {
  options: T.arrayOf({}).isRequired,
  title: T.string.isRequired,
  onLeaveFeedback: T.func.isRequired,
  statTitle: T.string.isRequired,
};

export default Section;

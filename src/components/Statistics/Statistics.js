import React from 'react';
import T from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Total: {total}</h3>
      <h3>Positive feedback: {positivePercentage}%</h3>
    </>
  );
}

Statistics.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.number.isRequired,
};

export default Statistics;

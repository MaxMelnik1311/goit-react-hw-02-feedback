import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plus = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce(
      (total, current) => total + current,
      0,
    );
  };

  countPercentage = (posVotes, totalVotes) => {
    return (posVotes / totalVotes) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const percentage = this.countPercentage(good, total);
    const title = 'Please give feedback';
    const statTitle = 'Statistics';
    const message = 'No feedback given';

    return (
      <>
        <Section
          title={title}
          options={Object.keys(this.state)}
          onLeaveFeedback={this.plus}
          statTitle={statTitle}
        />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message={message} />
        )}
      </>
    );
  }
}

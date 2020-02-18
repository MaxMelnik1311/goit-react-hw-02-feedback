import React from 'react';
import T from 'prop-types';

function Notification({ message }) {
  return <h3>{message}</h3>;
}

Notification.propTypes = {
  message: T.string.isRequired,
};

export default Notification;

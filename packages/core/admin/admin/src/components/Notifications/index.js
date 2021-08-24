import { NotificationsProvider } from '@strapi/helper-plugin';
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
// import { CSSTransition } from 'react-transition-group';

// import Notification from './Notification';
import reducer, { initialState } from './reducer';
// import NotificationsWrapper from './Wrapper';

const Notifications = ({ children }) => {
  // const [{ notifications }, dispatch] = useReducer(reducer, initialState);
  const [, dispatch] = useReducer(reducer, initialState);

  const displayNotification = config => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      config,
    });
  };

  return (
    <NotificationsProvider toggleNotification={displayNotification}>
      {children}
    </NotificationsProvider>
  );

  // FIXME
  // return (
  //   <NotificationsProvider toggleNotification={displayNotification}>
  //     <NotificationsWrapper>
  //       {notifications.map(notification => (
  //         <CSSTransition
  //           key={notification.id}
  //           classNames="notification"
  //           timeout={{
  //             enter: 500,
  //             exit: 300,
  //           }}
  //         >
  //           <Notification dispatch={dispatch} notification={notification} />
  //         </CSSTransition>
  //       ))}
  //     </NotificationsWrapper>
  //     {children}
  //   </NotificationsProvider>
  // );
};

Notifications.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Notifications;
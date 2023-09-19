import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'online' : 'offline';

  return (
    <li className={css.item}>
      <span className={css[`status-${statusClass}`]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

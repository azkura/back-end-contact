import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h2>
        <i className={icon} /> {title}
      </h2>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Manager',
  icon: 'fas fa-id-card-alt'
};

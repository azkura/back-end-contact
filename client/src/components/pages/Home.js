import React from 'react';
import { Contacts } from '../contacts/Contacts';
import ContactState from '../../context/contact/ContactState';

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>{/* contactform */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

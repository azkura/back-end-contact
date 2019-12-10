import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'donald trump',
        email: 'trump@gmail.com',
        phone: '466-771-7659',
        type: 'professional'
      },
      {
        id: 2,
        name: 'boris johnson',
        email: 'boris@gmail.com',
        phone: '555-381-7655',
        type: 'personal'
      },
      {
        id: 3,
        name: 'ted johnson',
        email: 'tedj@gmail.com',
        phone: '465-321-7655',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;

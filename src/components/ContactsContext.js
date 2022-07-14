import React from "react";
import useLocalStorage from "./useLocalStorage";
import Emitter from './Emitter';
import uuid from 'react-uuid'


export const SHOW_MODAL = {
  None: "None",
  AddContact: "AddContact",
  Email: "Email",
};

export const ContactsContext = React.createContext({});
export const ContactsProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(SHOW_MODAL.None);
  const [activityEmail, setActivityEmail] = React.useState(''); 
  const [contacts , setContacts] = useLocalStorage("contacts",[])


  const setShowContact = (shouldShow) => {
    if (shouldShow) {
      setShowModal(SHOW_MODAL.AddContact);
      
    } else {
      setShowModal(SHOW_MODAL.None);
    }
  };

  const setShowEmail = (shouldShow,toEmail) => {
    if (shouldShow) {
      setShowModal(SHOW_MODAL.Email);
      setActivityEmail(toEmail)
    } else {
      setShowModal(SHOW_MODAL.None);
      setActivityEmail('')
    }
  };

  const deleteContact = (contactId) =>{
    const newContacts = contacts.filter((contact) => contact.id !== contactId)
    setContacts(newContacts)
    Emitter.emit('app_message',{payload: "delete successful"})
  }

  const addContact = (newContact) => {
    const id = uuid()
    setContacts([...contacts, { id, ...newContact }]);
    Emitter.emit('app_message',{payload:"success"})
  }

  const updateUserContact = (contactId, contact) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts([...newContacts, contact]);
  }

  return (
    <ContactsContext.Provider
      value={{
        showModal,
        activityEmail,
        contacts,
        addContact,
        deleteContact,
        updateUserContact,
        setShowContact,
        setShowEmail,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

  
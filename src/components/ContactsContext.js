import React from "react";
import useLocalStorage from "./useLocalStorage";


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
  }

  return (
    <ContactsContext.Provider
      value={{
        showModal,
        activityEmail,
        deleteContact,
        setShowContact,
        setShowEmail,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

  
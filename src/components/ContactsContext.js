import React from "react";

export const SHOW_MODAL = {
  None: "None",
  AddContact: "AddContact",
  Email: "Email",
};

export const ContactsContext = React.createContext({});
export const ContactsProvider = ({ children }) => {
  const [showModal, setShowModal] = React.useState(SHOW_MODAL.None);

  const setShowContact = (shouldShow) => {
    if (shouldShow) {
      setShowModal(SHOW_MODAL.AddContact);
    } else {
      setShowModal(SHOW_MODAL.None);
    }
  };

  const setShowEmail = (shouldShow) => {
    if (shouldShow) {
      setShowModal(SHOW_MODAL.Email);
    } else {
      setShowModal(SHOW_MODAL.None);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        showModal,
        setShowContact,
        setShowEmail,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

  
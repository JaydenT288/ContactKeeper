import React from "react";
import { ContactsContext, } from "./ContactsContext";

// Controls targeting all contacts
const ContactControls = (props) => {
  const { setShowContact } = React.useContext(ContactsContext);
  return (
      <div className="top-controls">
        <button onClick={() => setShowContact(true)}>Add</button>
      </div>
  );
};

export default ContactControls;
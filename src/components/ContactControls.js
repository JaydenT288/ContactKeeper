import { ContactsContext, } from "./ContactsContext";
import React from "react";

const ContactControls = (props) => {
    const {setShowEmail, deleteContact} = React.useContext(ContactsContext);
    const { toEmail, contactId} = props;
    return (
    <div className="contact-controls">
        <button>Edit</button>
        <button onClick={() => deleteContact(contactId)}>Delete</button>
        <button onClick={() => setShowEmail(true, toEmail)}>Email</button>
    </div>
    );
}

export default ContactControls;
  
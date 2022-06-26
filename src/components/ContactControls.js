import { ContactsContext, } from "./ContactsContext";
import React from "react";

const ContactControls = () => {
    const {setShowEmail} = React.useContext(ContactsContext);
    return (
    <div className="contact-controls">
        <button>Edit</button>
        <button>Delete</button>
        <button onClick={() => setShowEmail(true)}>Email</button>
    </div>
    );
}

export default ContactControls;
  
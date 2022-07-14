import React from "react";
import Contact from "./Contact";
import {ContactsContext} from "./ContactsContext";

const ContactList = (props) => {
    // Correct: props={contacts:[contact1, contact2, ..]}
    // Actual:  props={contacts: {contacts: [contact1, contact2, ..]}}
    const {contacts} = React.useContext(ContactsContext);
    return (
    <div className="contact-list">
        {contacts.map(contact => (
            <Contact key={contact.id} contactData={contact}></Contact>
        ))}
    </div>
    );
}

export default ContactList;
import React from "react";
import Contact from "./Contact";
import useLocalStorage from "./useLocalStorage";

const ContactList = (props) => {
    // Correct: props={contacts:[contact1, contact2, ..]}
    // Actual:  props={contacts: {contacts: [contact1, contact2, ..]}}
    const [contacts, ] = useLocalStorage("contacts",[]);
    return (
    <>
    <div className="contactList">
        {contacts.map(contact => (
            <Contact key={contact.id} contactData={contact}></Contact>
        ))}
    </div>
    </>
    );
}

export default ContactList;
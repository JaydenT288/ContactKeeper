import React from 'react'
import {Modal} from 'react-bootstrap'
import { ContactsContext } from './ContactsContext';


const ContactEdit = (props) => {
  const {show, handleClose, userId} = props;
  const {addContact, updateUserContact, contacts} = React.useContext(ContactsContext);
  const defaultContact = contacts.filter(contact => contact.id === userId);
  const [contact, setContact] = React.useState(defaultContact ? defaultContact[0] : {});
  const modalTitle = userId ? 'Edit contact' : 'Add contact';
  const onSubmit = (userId, contact) => {
    if (userId) {
      updateUserContact(userId, contact);
    } else {
      addContact(contact);
    }
  }



  function updateContact(field, newValue) {
    switch (field) {
      case 'name':
        setContact({...contact, name: newValue})
        break
      case 'email':
        setContact({...contact, email: newValue})
        break
      case 'phone':
        setContact({...contact, phone: newValue})
        break
      default:
        break
    }
  }
  
  return (
  <>
    <Modal show={show} onHide={handleClose}>
      {/* bootstrap closeButton */}
      <Modal.Header closeButton>
      <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form onSubmit={(ee) => {
            // Must prevent default so we don't refresh the page.
            ee.preventDefault();
            onSubmit(userId, contact);
            handleClose();
          }}>
           <label className="contact-label" htmlFor="name">Name</label>
            {/* 错误 <input type="text" onChange={ee => setContact({name:ee.target.value })}></input> */}
            <input
              type="text"
              onChange={(ee) => updateContact("name", ee.target.value)}
              value={contact?.name || ''}
            ></input>
            <br />
            <label className="contact-label" htmlFor="email">Email</label>
            <input
              type="text"
              onChange={(ee) => updateContact("email", ee.target.value)}
              value={contact?.email || ''}
            ></input>
            <br />
            <label className="contact-label" htmlFor="phone">Phone number</label>
            <input
              type="text"
              onChange={(ee) => updateContact("phone", ee.target.value)}
              value={contact?.phone || ''}
            ></input>
            <br />
            <br></br>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default ContactEdit

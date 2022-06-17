import React from 'react'
import {Modal} from 'react-bootstrap'
import useLocalStorage from './useLocalStorage';
import uuid from 'react-uuid'


const ContactEdit = (props) => {
  const {show, handleClose} = props;
  const [contact, setContact] = React.useState({})
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const addContact = () => {
    const id = uuid()
    setContacts([...contacts, {id, ...contact}])
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
        <Modal.Title>Add contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={addContact}>
          <label htmlFor="name">Name</label>
          {/* 错误 <input type="text" onChange={ee => setContact({name:ee.target.value })}></input> */}
          <input type="text" onChange={ee => updateContact('name', ee.target.value)}></input>
          <br/>
          <label htmlFor="email">Email</label>
          <input type="text" onChange={ee => updateContact('email', ee.target.value)}></input>
          <br/>
          <label htmlFor="phone">Phone number</label>
          <input type="text" onChange={ee => updateContact('phone', ee.target.value)}></input>
          <br/>
          <button type="submit">
          Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default ContactEdit

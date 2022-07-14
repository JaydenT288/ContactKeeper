import { ContactsContext } from './ContactsContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactControls = (props) => {
  const { setShowEmail, deleteContact } = React.useContext(ContactsContext);
  const { toEmail, contactId } = props;
  const navigate = useNavigate();

  return (
    <div className='contact-controls'>
      <button
        className='btn btn-dark'
        onClick={() => navigate(`edit/${contactId}`)}
      >
        Edit
      </button>
      <button
        className='btn btn-danger'
        onClick={() => deleteContact(contactId)}
      >
        Delete
      </button>
      <button
        className='btn btn-success'
        onClick={() => setShowEmail(true, toEmail)}
      >
        Email
      </button>
    </div>
  );
};

export default ContactControls;

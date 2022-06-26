import React from 'react';
import { Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const EmailEdit = (props) => {
  const { show, handleClose } = props;
  const formRef = React.useRef();
  const sendEmail = async (ee) => {
    // Override default behavior of auto refreshing. 
    ee.preventDefault();
    const [subjectContainer, contentContainer] = formRef.current;
    const subject = subjectContainer.value;
    const content = contentContainer.value;
    emailjs.init(process.env.REACT_APP_EMAILJS_API_KEY)
    await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {subject, content, to_email: 'hello@abc.com'})
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* bootstrap closeButton */}
        <Modal.Header closeButton>
          <Modal.Title>Add contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(ee) => sendEmail(ee)} ref={formRef}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
            ></input>
            <br/>
            <textarea
              type="text"
            ></textarea>
            <br/>
            <button type="submit">Submit</button>

          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmailEdit;

import React from 'react';
import { Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Emitter from './Emitter';

const EmailEdit = (props) => {
    const { show, handleClose, activeEmail } = props;
    const formRef = React.useRef();
    const sendEmail = async (ee) => {
      // Override default behavior of auto refreshing. 
      ee.preventDefault();
      if (activeEmail !== '') {
        const [subjectContainer, contentContainer] = formRef.current;
        const subject = subjectContainer.value;
        const content = contentContainer.value;
        emailjs.init(process.env.REACT_APP_EMAILJS_API_KEY)
        try {
          await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {subject, content, to_email: activeEmail})
            Emitter.emit('app_message', {payload: 'email send success'})
        } catch (e) {
          Emitter.emit('app_message', {payload: 'email send has failed'})
        }
  
      }
      handleClose();
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
            <label htmlFor="subject">Subject</label><br></br>
            <input className="emailEdit--emailSubject"
              type="text"
            ></input>
            <br/>
            <br></br>
            <label htmlFor="content">Content</label><br></br>
            <textarea className="emailEdit--emailContent"
              type="text"
            ></textarea>
            <br/>
            <br></br>
            <button className="btn btn-primary" type="submit">Send email</button>

          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmailEdit;

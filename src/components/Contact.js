import ContactControls from "./ContactControls";

const Contact = (props) => {
  const { contactData } = props;
  return (
    <>
      <div className="contact-preview">
        <div className="contact-preview-child align-left">
          <span className="contact-field">{contactData.name}</span>
          <span className="contact-field">{contactData.email}</span>
          <span className="contact-field">{contactData.phone}</span>
        </div>
        <div className="contact-preview-child align-right">
          <ContactControls contactId={contactData.id} toEmail={contactData.email}></ContactControls>
        </div>
      </div>
    </>
  );
};

export default Contact;
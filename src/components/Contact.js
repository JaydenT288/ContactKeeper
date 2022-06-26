import ContactControls from "./ContactControls";

const Contact = (props) => {
  const { contactData } = props;
  return (
    <>
      <div className="contact-preview">
        <div className="contact-preview-child align-left">
          <span>{contactData.name}</span>
          <span>{contactData.email}</span>
          <span>{contactData.phone}</span>
        </div>
        <div className="contact-preview-child align-right">
          <ContactControls></ContactControls>
        </div>
      </div>
    </>
  );
};

export default Contact;
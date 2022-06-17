import ContactControls from './ContactControls'

const Contact = (props) => {
    const {contactData} = props;
    
    return (
    <>
    <div className="contact-preview">
        {contactData.name}
        {contactData.email}
        {contactData.phone}
    </div>
    <ContactControls></ContactControls>
    </>
    )
}

export default Contact
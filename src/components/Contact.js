import ContactControls from './ContactControls'

const Contact = (props) => {
    const {contactData} = props;
    
    return (
     <div>
        {contactData}
        <ContactControls></ContactControls>
     </div>
    )
}

export default Contact
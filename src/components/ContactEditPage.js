import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactEdit from "./ContactEdit";

const ContactEditPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const {userId} = params;

    return (
        <ContactEdit
            userId={userId}
            show={true}
            handleClose={() => navigate(`/`)}
        ></ContactEdit>
    )
}
export default ContactEditPage;
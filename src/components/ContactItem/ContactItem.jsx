import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

import { Item, IconSmile, IconPhone } from "./ContactItem.styled";

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <Item><IconSmile /><span>{name}</span></Item>
                <Item><IconPhone/><span>{number}</span></Item>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete contact</button>
        </>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem
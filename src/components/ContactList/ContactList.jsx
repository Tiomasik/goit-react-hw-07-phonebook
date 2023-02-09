import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getContacts, getFilter } from "redux/selectors";
import ContactItem from '../ContactItem/ContactItem'
import { List, Item, Info, Filter } from './ContactList.styled'
import { fetchAll } from "redux/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);
    
    const getVisibleContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
    }
        
    return (
        <>
            {contacts.length ===0 && <Info>Sorry, but you don't have any contacts</Info>}
            {getVisibleContacts().length === 0 && contacts.length !== 0
                && <Info><span>Sorry, but you don't have contact</span> 
                <Filter>{filter}</Filter></Info>}
            < List >
            {getVisibleContacts().map(({ id, name, number }) =>
                <Item key={id}>
                    <ContactItem name={name}
                        number={number}
                        id={id} />
                </Item>)}
            </List >
        </>
    )
}

export default ContactList
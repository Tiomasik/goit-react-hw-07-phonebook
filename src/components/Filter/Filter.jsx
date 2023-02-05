import { useDispatch, useSelector } from "react-redux";

import { filterContacts } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { StyleName } from './Filter.styled'
import { StyleInput } from './Filter.styled'

const Filter = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)

    const changeFilter = (evt) => {
        dispatch(filterContacts(evt.currentTarget.value))
    }
return (
    <>
        {contacts.length !== 0 && <div>
            <h3 style={{textAlign: 'center',
                        fontSize: 26,
                        fontWeight: 700,
                        marginTop: 0,
                        marginBottom: 10}}>Contacts</h3>
            <StyleName htmlFor='filter'>Find contacts by names</StyleName>
            <StyleInput type="text"
                    id='filter'
                    onChange={changeFilter}/>
        </div >}
    </>
    )
}

export default Filter
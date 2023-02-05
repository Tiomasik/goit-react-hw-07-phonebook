import { createSlice } from "@reduxjs/toolkit"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = {
  contacts: [],
  filter: '',
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      if (!(state.contacts.filter(contact => contact.name.toLowerCase() === action.payload.name.trim().toLowerCase())).length) {
        return {
          ...state, contacts: [action.payload, ...state.contacts]
        }
      } else alert(`${action.payload.name} is already in contacts`)
        return state
    },

    deleteContact(state, action) {
      const newContacts = state.contacts.filter(contact => contact.id !== action.payload)
      return {
        ...state, contacts: newContacts
      }
    },

    filterContacts(state, action) {
      return {
        ...state, filter: action.payload
      }
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
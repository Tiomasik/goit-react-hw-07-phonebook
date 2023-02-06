import { createSlice } from "@reduxjs/toolkit"

import { fetchAll, addContact, deleteContact } from "./operations";

const contactsInitialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
}

const handlePending = (state) => {
  return {
    ...state,
    isLoading: true
  }
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  }
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    filterContacts(state, action) {
      return {
        ...state,
        filter: action.payload
      }
    },
  },

  extraReducers: {
    [fetchAll.pending]: handlePending,
    [fetchAll.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        contacts: [...action.payload],
      }
    },
    [fetchAll.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        contacts: [...state.contacts, action.payload],
      }
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const newContacts = state.contacts.filter(contact => contact.id !== action.payload.id)
      return {
        ...state,
        isLoading: false,
        error: null,
        contacts: newContacts,
      }
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer

export const { filterContacts } = contactsSlice.actions;
import { createSlice } from "@reduxjs/toolkit"

import { fetchAll, addContact, deleteContact } from "./operations";

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
}

const handlePending = (state) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      isLoading: true,
    }
  }
};

const handleRejected = (state, action) => {
  return {
    ...state,
    contacts: {
      ...state.contacts,
      isLoading: false,
      error: action.payload,
    }
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
        contacts: {
          isLoading: false,
          error: null,
          items: [...action.payload],
        }
      }
    },
    [fetchAll.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        contacts: {
          isLoading: false,
          error: null,
          items: [...state.contacts.items, action.payload],
        }
      }
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const newContacts = state.contacts.items.filter(contact => contact.id !== action.payload.id)
      return {
        ...state,
        contacts: {
          isLoading: false,
          error: null,
          items: newContacts,
        }
      }
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer

export const { filterContacts } = contactsSlice.actions;
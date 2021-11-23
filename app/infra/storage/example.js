import { initialState, setData, setError, setPending } from 'infra/helpers';
import { useSelector } from 'infra/storage';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { iife } from 'utils/helpers';

const storage = new ExampleStorage();

const reducer = createReducer(initialState, {
  ...storage.fetchQuote.handlers,
  ...storage.fetchContacts.handlers,
});

export default function ExampleStorage () {
  this.getReducer = () => reducer;

  this.getQuote = () => {
    return useSelector((state) => state.example.quote);
  };

  this.fetchQuote = iife(() => {
    const type = '@action/fetchQuote';
    const SUCCESS = createAction(type);
    const PENDING = createAction(type + '_pending');
    const FAILED = createAction(type + '_failed');

    return {
      actions: [SUCCESS, PENDING, FAILED],
      handlers: {
        [PENDING]: (state, action) => {
          const { key } = action.payload;
          setPending(state, key);
        },
        [FAILED]: (state, action) => {
          const { key } = action.payload;
          setError(state, key);
        },
        [SUCCESS]: (state, action) => {
          const { key, data } = action.payload;
          setData(state, key, data);
        },
      },
    };
  });

  this.getContacts = () => {
    return useSelector((state) => state.example.contacts);
  };

  this.fetchContacts = iife(() => {
    const type = '@action/fetchContacts';
    const SUCCESS = createAction(type);
    const PENDING = createAction(type + '_pending');
    const FAILED = createAction(type + '_failed');

    return {
      actions: [SUCCESS, PENDING, FAILED],
      handlers: {
        [PENDING]: (state, action) => {
          const { key } = action.payload;
          setPending(state, key);
        },
        [FAILED]: (state, action) => {
          const { key } = action.payload;
          setError(state, key);
        },
        [SUCCESS]: (state, action) => {
          const { key, data } = action.payload;
          setData(state, key, data);
        },
      },
    };
  });
}

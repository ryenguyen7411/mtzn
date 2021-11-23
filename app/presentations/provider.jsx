import React from 'react';
import { Provider, store } from 'infra/storage';

export default function AppProvider (props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

import ExampleStorage from './example';

export default function Storage () {
  const example = new ExampleStorage();
  this.Example = () => example;
}

export { createAction, createReducer } from '@reduxjs/toolkit';
export { Provider, useDispatch, useSelector } from 'react-redux';
export { combineReducers } from 'redux';
export * from './configure';

import Storage, { combineReducers } from 'infra/storage';

const storage = new Storage();

export default combineReducers({
  example: storage.Example().getReducer(),
});

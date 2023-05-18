import { combineReducers } from 'redux';
import authReducer from 'Data/Auth';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

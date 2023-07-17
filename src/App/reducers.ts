import { combineReducers } from 'redux';
import authReducer from 'Data/Auth';
import userReducer from 'Data/User';
import layoutSateReducer from 'Data/LayoutState';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  layoutState: layoutSateReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

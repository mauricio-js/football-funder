import { combineReducers } from 'redux';
import authReducer from 'Data/Auth';
import layoutSateReducer from 'Data/LayoutState';

const appReducer = combineReducers({
  auth: authReducer,
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

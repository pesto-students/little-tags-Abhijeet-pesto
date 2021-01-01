import { combineReducers, Reducer } from '@reduxjs/toolkit';
import userReducer, { UserState } from './slices/userSlice';

const rootReducer: Reducer<{
	user: UserState;
}> = combineReducers({
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

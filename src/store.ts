import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { localStorageMiddleware, checkIfOldVisitor, reHydrateStore } from './utilities';

const store = configureStore({
	reducer: rootReducer,
	preloadedState: checkIfOldVisitor() ? reHydrateStore() : undefined,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;

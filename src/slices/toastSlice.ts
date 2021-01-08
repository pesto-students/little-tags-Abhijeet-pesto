import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

let toastId = 0;

export const getNewToastId = (): number => {
	toastId += 1;
	return toastId;
};

export interface ToastMessage {
	id: number;
	title: 'success' | 'error' | 'info' | 'warning';
	message: string;
}

const toastAdapter = createEntityAdapter<ToastMessage>();

const toastSlice = createSlice({
	name: 'toasts',
	initialState: toastAdapter.getInitialState(),
	reducers: {
		addNewToast: toastAdapter.addOne,
		removeToast: toastAdapter.removeOne,
	},
});

export const { addNewToast, removeToast } = toastSlice.actions;

export const { selectAll: selectAllToasts } = toastAdapter.getSelectors((state: RootState) => state.toasts);

export default toastSlice.reducer;

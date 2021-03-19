import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

let toastId = 0;

const getNewToastId = (): number => {
	toastId += 1;
	return toastId;
};

export interface NewToastParams {
	title: 'success' | 'error' | 'info' | 'warning';
	message: string;
}

export interface ToastMessage extends NewToastParams {
	id: number;
}

const toastAdapter = createEntityAdapter<ToastMessage>();

const toastSlice = createSlice({
	name: 'toasts',
	initialState: toastAdapter.getInitialState(),
	reducers: {
		addNewToast: (state, action: PayloadAction<NewToastParams>) => {
			const { title, message } = action.payload;
			const newToast = {
				id: getNewToastId(),
				title,
				message,
			};
			toastAdapter.addOne(state, newToast);
		},
		removeToast: toastAdapter.removeOne,
	},
});

export const { addNewToast, removeToast } = toastSlice.actions;

export const { selectAll: selectAllToasts } = toastAdapter.getSelectors((state: RootState) => state.toasts);

export default toastSlice.reducer;

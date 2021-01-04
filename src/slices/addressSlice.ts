import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface Address {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: number;
	mainAddress: string;
	subAddress: string;
	state: string;
	pinCode: number;
}

export interface ExtraAddressInfo {
	defaultAddressId: string;
	selectedAddressId: string;
}

const addressAdapter = createEntityAdapter<Address>();

const addressSlice = createSlice({
	name: 'address',
	initialState: addressAdapter.getInitialState<ExtraAddressInfo>({
		defaultAddressId: '',
		selectedAddressId: '',
	}),
	reducers: {
		addAddress: addressAdapter.addOne,
		deleteAddress: addressAdapter.removeOne,
		modifyAddress: addressAdapter.updateOne,
		addressLoaded: addressAdapter.setAll,
		setSelectedAddress: (state, action: PayloadAction<string>) => {
			state.selectedAddressId = action.payload;
		},
		setDefaultAddress: (state, action: PayloadAction<string>) => {
			state.defaultAddressId = action.payload;
		},
	},
});

export const {
	addAddress,
	deleteAddress,
	modifyAddress,
	setDefaultAddress,
	setSelectedAddress,
	addressLoaded,
} = addressSlice.actions;

export const { selectAll: selectAllAddress, selectById: selectAddressById } = addressAdapter.getSelectors(
	(state: RootState) => state.address,
);

export default addressSlice.reducer;

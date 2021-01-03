import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface Address {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	mainAddress: string;
	subAddress: string;
	state: string;
	pinCode: number;
}

export interface DefaultAddress {
	defaultAddressId: string | null;
}

const addressAdapter = createEntityAdapter<Address>();

const addressSlice = createSlice({
	name: 'address',
	initialState: addressAdapter.getInitialState<DefaultAddress>({
		defaultAddressId: null,
	}),
	reducers: {
		addAddress: addressAdapter.addOne,
		deleteAddress: addressAdapter.removeOne,
		modifyAddress: addressAdapter.updateOne,
		addressLoaded: addressAdapter.setAll,
		setDefaultAddress: (state, action: PayloadAction<string>) => {
			state.defaultAddressId = action.payload;
		},
	},
});

export const { addAddress, deleteAddress, modifyAddress, setDefaultAddress, addressLoaded } = addressSlice.actions;

export const { selectAll: selectAllAddress, selectById: selectAddressById } = addressAdapter.getSelectors(
	(state: RootState) => state.address,
);

export default addressSlice.reducer;

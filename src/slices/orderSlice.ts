import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { CartItem } from './cartSlice';

export interface ProductsEntity {
	allIds: number[];
	byId: {
		[key: number]: CartItem;
	};
}

export interface Order {
	id: string;
	date: string;
	products: ProductsEntity;
	addressId: string;
}

const orderAdapter = createEntityAdapter<Order>();

const orderSlice = createSlice({
	name: 'orders',
	initialState: orderAdapter.getInitialState(),
	reducers: {
		addOrder: orderAdapter.addOne,
		ordersLoaded: orderAdapter.setAll,
	},
});

export const { addOrder, ordersLoaded } = orderSlice.actions;

export const { selectAll: selectAllOrders, selectById: selectOrderById } = orderAdapter.getSelectors(
	(state: RootState) => state.orders,
);

export default orderSlice.reducer;

import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
	size?: string | null;
	imgUrl: string;
}

const cartAdapter = createEntityAdapter<CartItem>();

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartAdapter.getInitialState(),
	reducers: {
		addToCart: cartAdapter.addOne,
		deleteFromCart: cartAdapter.removeOne,
		modifyItem: cartAdapter.updateOne,
		emptyCart: cartAdapter.removeAll,
		cartLoaded: cartAdapter.setAll,
	},
});

export const { addToCart, deleteFromCart, modifyItem, emptyCart, cartLoaded } = cartSlice.actions;

export const { selectAll: selectCartItems, selectById: selectCartItemById } = cartAdapter.getSelectors(
	(state: RootState) => state.cart,
);

export const getTotalItemsInCart = createSelector(selectCartItems, (items) =>
	items.reduce((total, item) => total + item.quantity, 0),
);

export default cartSlice.reducer;

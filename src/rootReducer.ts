import { combineReducers, Reducer, EntityState } from '@reduxjs/toolkit';
import {
	userReducer,
	UserState,
	inventoryReducer,
	InventoryItem,
	InventoryFilter,
	cartReducer,
	CartItem,
	addressReducer,
	Address,
	ExtraAddressInfo,
	Order,
	orderReducer,
	toastReducer,
	ToastMessage,
} from './slices';

const rootReducer: Reducer<{
	user: UserState;
	inventory: EntityState<InventoryItem> & InventoryFilter;
	cart: EntityState<CartItem>;
	address: EntityState<Address> & ExtraAddressInfo;
	orders: EntityState<Order>;
	toasts: EntityState<ToastMessage>;
}> = combineReducers({
	user: userReducer,
	inventory: inventoryReducer,
	cart: cartReducer,
	address: addressReducer,
	orders: orderReducer,
	toasts: toastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

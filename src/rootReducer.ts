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
} from './slices';

const rootReducer: Reducer<{
	user: UserState;
	inventory: EntityState<InventoryItem> & InventoryFilter;
	cart: EntityState<CartItem>;
	address: EntityState<Address> & ExtraAddressInfo;
	orders: EntityState<Order>;
}> = combineReducers({
	user: userReducer,
	inventory: inventoryReducer,
	cart: cartReducer,
	address: addressReducer,
	orders: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

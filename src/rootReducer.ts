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
} from './slices';

const rootReducer: Reducer<{
	user: UserState;
	inventory: EntityState<InventoryItem> & InventoryFilter;
	cart: EntityState<CartItem>;
	address: EntityState<Address> & ExtraAddressInfo;
}> = combineReducers({
	user: userReducer,
	inventory: inventoryReducer,
	cart: cartReducer,
	address: addressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

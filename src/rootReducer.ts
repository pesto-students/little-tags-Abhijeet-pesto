import { combineReducers, Reducer, EntityState } from '@reduxjs/toolkit';
import {
	userReducer,
	UserState,
	inventoryReducer,
	InventoryItem,
	cartReducer,
	CartItem,
	addressReducer,
	Address,
	DefaultAddress,
} from './slices';

const rootReducer: Reducer<{
	user: UserState;
	inventory: EntityState<InventoryItem>;
	cart: EntityState<CartItem>;
	address: EntityState<Address> & DefaultAddress;
}> = combineReducers({
	user: userReducer,
	inventory: inventoryReducer,
	cart: cartReducer,
	address: addressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import userReducer from './userSlice';
import inventoryReducer from './inventorySlice';
import cartReducer from './cartSlice';
import addressReducer from './addressSlice';

export { userReducer, inventoryReducer, cartReducer, addressReducer };

export { loginUser, openLoginModal, hideLoginModal, logOut } from './userSlice';
export {
	addToCart,
	deleteFromCart,
	modifyItem,
	emptyCart,
	getTotalItemsInCart,
	cartLoaded,
	selectCartItems,
} from './cartSlice';
export { getInventory, setInventoryFilter, selectFilteredItems, selectItemById } from './inventorySlice';
export {
	addAddress,
	deleteAddress,
	modifyAddress,
	setDefaultAddress,
	setSelectedAddress,
	addressLoaded,
	selectAllAddress,
	selectAddressById,
} from './addressSlice';

export type { InventoryFilter } from './inventorySlice';
export type { Address, ExtraAddressInfo } from './addressSlice';
export type { CartItem } from './cartSlice';
export type { InventoryItem } from './inventorySlice';
export type { UserState } from './userSlice';

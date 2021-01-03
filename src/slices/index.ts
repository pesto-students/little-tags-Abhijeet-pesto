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
export { getInventory, selectItemsByCategory, selectItemById, selectItemsBySearchQuery } from './inventorySlice';
export {
	addAddress,
	deleteAddress,
	modifyAddress,
	setDefaultAddress,
	addressLoaded,
	selectAllAddress,
	selectAddressById,
} from './addressSlice';

export type { Address, DefaultAddress } from './addressSlice';
export type { CartItem } from './cartSlice';
export type { InventoryItem } from './inventorySlice';
export type { UserState } from './userSlice';

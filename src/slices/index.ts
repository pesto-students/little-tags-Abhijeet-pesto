import userReducer from './userSlice';
import inventoryReducer from './inventorySlice';
import cartReducer from './cartSlice';
import addressReducer from './addressSlice';
import orderReducer from './orderSlice';
import toastReducer from './toastSlice';

export { userReducer, inventoryReducer, cartReducer, addressReducer, orderReducer, toastReducer };

export { loginUser, openLoginModal, hideLoginModal, logOut } from './userSlice';
export { addOrder, ordersLoaded, selectAllOrders, selectOrderById } from './orderSlice';
export { addNewToast, removeToast, selectAllToasts } from './toastSlice';
export {
	addToCart,
	deleteFromCart,
	modifyItem,
	emptyCart,
	getTotalItemsInCart,
	cartLoaded,
	selectAllCartItems,
	selectCartItemById,
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

export type { ToastMessage, NewToastParams } from './toastSlice';
export type { Order, ProductsEntity } from './orderSlice';
export type { InventoryFilter } from './inventorySlice';
export type { Address, ExtraAddressInfo } from './addressSlice';
export type { CartItem } from './cartSlice';
export type { InventoryItem } from './inventorySlice';
export type { UserState } from './userSlice';

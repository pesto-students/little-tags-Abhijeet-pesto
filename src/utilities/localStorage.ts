import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import {
	loginUser,
	logOut,
	openLoginModal,
	hideLoginModal,
	getInventory,
	cartLoaded,
	addressLoaded,
	setInventoryFilter,
	ordersLoaded,
} from '../slices';

const VISITED_KEY = '$little_tags_visited'; // if the user has visited before
const USERS_KEY = '$little_tags_users'; // list of users that have accessed the app
const CURRENT_USER_KEY = '$little_tags_current_user'; // currently logged in user
const CART_KEY_PREFIX = '$little_tags_cart_'; // cart items of users
const ADDRESS_KEY_PREFIX = '$little_tags_address_'; // address of users
const ORDERS_KEY_PREFIX = '$little_tags_orders_';

export const checkIfOldVisitor = (): boolean => {
	try {
		const isOldVisitor = localStorage.getItem(VISITED_KEY);
		if (isOldVisitor === null) {
			localStorage.setItem(VISITED_KEY, 'true');
			return false;
		}
		return JSON.parse(isOldVisitor);
	} catch (err) {
		return false;
	}
};

const currentUserExists = () => {
	try {
		const currentUser = localStorage.getItem(CURRENT_USER_KEY);
		return currentUser ? JSON.parse(currentUser) : false;
	} catch (err) {
		return false;
	}
};

// checks if a new user has accessed the app and stores the email for that user
const addNewUser = (email: string | null) => {
	try {
		const existingUsers = localStorage.getItem(USERS_KEY);
		if (existingUsers) {
			const usersArray = JSON.parse(existingUsers);
			if (!usersArray.includes(email)) {
				localStorage.setItem(USERS_KEY, JSON.stringify([...usersArray, email]));
			}
		} else {
			localStorage.setItem(USERS_KEY, JSON.stringify([email]));
		}
	} catch (err) {
		return;
	}
};

const saveCurrentUserInfo = (data: string) => {
	try {
		localStorage.setItem(CURRENT_USER_KEY, data);
	} catch (err) {
		return;
	}
};

const clearCurrentUser = () => {
	try {
		localStorage.removeItem(CURRENT_USER_KEY);
	} catch (err) {
		return;
	}
};

// saves the state based on the actions triggered by user
// Only part of state is updated at a time
const saveState = (userEmail: string | null, data: string, stateKey: string) => {
	try {
		switch (stateKey) {
			case 'cart': {
				localStorage.setItem(`${CART_KEY_PREFIX}${userEmail}`, data);
				break;
			}
			case 'address': {
				localStorage.setItem(`${ADDRESS_KEY_PREFIX}${userEmail}`, data);
				break;
			}
			case 'orders': {
				localStorage.setItem(`${ORDERS_KEY_PREFIX}${userEmail}`, data);
				break;
			}
		}
	} catch (err) {
		return;
	}
};

// gets the state for a particular user
const loadState = (userEmail: string | null) => {
	if (userEmail) {
		const userCart = localStorage.getItem(`${CART_KEY_PREFIX}${userEmail}`);
		const userAddress = localStorage.getItem(`${ADDRESS_KEY_PREFIX}${userEmail}`);
		const userOrders = localStorage.getItem(`${ORDERS_KEY_PREFIX}${userEmail}`);
		return {
			cart: userCart ? JSON.parse(userCart) : undefined,
			address: userAddress ? JSON.parse(userAddress) : undefined,
			orders: userOrders ? JSON.parse(userOrders) : undefined,
		};
	}
	return undefined;
};

// checks if a user was already logged in and sets the state for that user
export const reHydrateStore = (): Partial<RootState> | undefined => {
	const user = currentUserExists();
	if (user) {
		return {
			user,
			...loadState(user.email),
		};
	}
	return undefined;
};

export const localStorageMiddleware: Middleware<Record<string, never>, RootState> = ({ getState, dispatch }) => (
	next,
) => (action: PayloadAction) => {
	const result = next(action);
	const state = getState();
	const { user } = state;
	const ignoredActions: string[] = [
		// actions for which local storage is not updated
		loginUser.pending.type,
		getInventory.pending.type,
		getInventory.fulfilled.type,
		openLoginModal.type,
		hideLoginModal.type,
		cartLoaded.type,
		addressLoaded.type,
		setInventoryFilter.type,
		ordersLoaded.type,
	];

	switch (action.type) {
		case loginUser.fulfilled.type: {
			addNewUser(user.email); // if new user update users array
			saveCurrentUserInfo(JSON.stringify(user)); // save user name & email
			const existingState = loadState(user.email); // if old user get stored state
			if (existingState) {
				const { cart, address, orders } = existingState;
				// update state for old user
				if (cart) dispatch(cartLoaded(Object.values(cart.entities))); // passing array of cartItems as adapter.setAll is used
				if (address) dispatch(addressLoaded(Object.values(address.entities)));
				if (orders) dispatch(ordersLoaded(Object.values(orders.entities)));
			}
			break;
		}
		case logOut.type: {
			//if user logs out, clear logged in user
			clearCurrentUser();
			break;
		}
		default: {
			// update state in local storage based on actions
			if (!ignoredActions.includes(action.type)) {
				const stateKey = action.type.slice(0, action.type.indexOf('/')); // get the part(cart/address etc) of state for which update occurred
				const data = Object.entries(state).find(([key]) => key === stateKey)?.[1]; // get the data for that part
				saveState(user.email, JSON.stringify(data), stateKey); // update state in local storage
			}
		}
	}
	return result;
};

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, facebookProvider, googleProvider } from '../services/firebase';
import { checkIfOldVisitor } from '../utilities';

export interface UserState {
	name: string | null;
	id: string | null;
	isLoggedIn: boolean;
	showLoginModal: boolean;
}

// interface LoginPayload {
// 	name: string;
// 	email: string;
// }

const initialState: UserState = {
	name: null,
	id: null,
	isLoggedIn: false,
	showLoginModal: !checkIfOldVisitor(),
};

interface Profile {
	first_name: string;
	given_name: string;
	id: string;
}

export const loginUser = createAsyncThunk('user/login', async (provider: 'google' | 'facebook') => {
	const response = await auth.signInWithPopup(provider === 'google' ? googleProvider : facebookProvider);
	if (response.additionalUserInfo) {
		const profile = response.additionalUserInfo.profile as Profile;
		const id = profile.id;
		const name = provider === 'google' ? profile.given_name : profile.first_name;
		return { name, id };
	}
	return { name: null, id: null };
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut: (state) => {
			state.name = null;
			state.id = null;
			state.isLoggedIn = false;
		},
		openLoginModal: (state) => {
			state.showLoginModal = true;
		},
		hideLoginModal: (state) => {
			state.showLoginModal = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.fulfilled, (state, action) => {
			const { name, id } = action.payload;
			state.name = name;
			state.id = id;
			state.isLoggedIn = true;
			state.showLoginModal = false;
		});
	},
});

export const { logOut, openLoginModal, hideLoginModal } = userSlice.actions;
export default userSlice.reducer;

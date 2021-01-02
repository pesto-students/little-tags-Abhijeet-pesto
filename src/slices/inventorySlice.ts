import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { CATEGORIES } from '../utilities';

export interface InventoryItem {
	id: number;
	title: string;
	price: number;
	description: string;
	category: CATEGORIES;
	image: string;
}

const inventoryAdapter = createEntityAdapter<InventoryItem>({
	selectId: (item) => item.id, // not required
});

export const getInventory = createAsyncThunk('inventory/loadItems', async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const items: InventoryItem[] = await response.json();
	return items;
});

const inventorySlice = createSlice({
	name: 'inventory',
	initialState: inventoryAdapter.getInitialState(),
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getInventory.fulfilled, (state, action) => {
			inventoryAdapter.setAll(state, action.payload);
		});
	},
});

export const { selectAll: selectAllItems, selectById: selectItemById } = inventoryAdapter.getSelectors(
	(state: RootState) => state.inventory,
);

export const selectItemsByCategory = (state: RootState, category: CATEGORIES): InventoryItem[] => {
	// should be memoized
	const allItems = selectAllItems(state);
	return allItems.filter((item) => item.category === category);
};

export default inventorySlice.reducer;

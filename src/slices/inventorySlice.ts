import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction, createSelector } from '@reduxjs/toolkit';
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

export interface InventoryFilter {
	filter: {
		filterBy: 'category' | 'searchQuery';
		filterValue: CATEGORIES | string;
	};
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
	initialState: inventoryAdapter.getInitialState<InventoryFilter>({
		filter: {
			filterBy: 'category',
			filterValue: '',
		},
	}),
	reducers: {
		setInventoryFilter: (state, action: PayloadAction<InventoryFilter>) => {
			const { filter } = action.payload;
			state.filter = filter;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getInventory.fulfilled, (state, action) => {
			inventoryAdapter.setAll(state, action.payload);
		});
	},
});

export const { setInventoryFilter } = inventorySlice.actions;

export const { selectAll: selectAllItems, selectById: selectItemById } = inventoryAdapter.getSelectors(
	(state: RootState) => state.inventory,
);

export const selectFilteredItems = createSelector(
	selectAllItems,
	(state: RootState) => state.inventory.filter,
	(items, { filterBy, filterValue }) => {
		if (filterValue.length === 0) {
			return items;
		} else if (filterBy === 'category') {
			return items.filter((item) => item.category === filterValue);
		} else {
			return items.filter(
				(item) =>
					item.description.toLowerCase().includes(filterValue.toLowerCase()) ||
					item.title.toLowerCase().includes(filterValue.toLowerCase()) ||
					item.category.toLowerCase().includes(filterValue.toLowerCase()),
			);
		}
	},
);

export default inventorySlice.reducer;

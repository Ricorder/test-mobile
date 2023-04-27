import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import initState from '../initState'

interface Article {
	id: number,
	title: string,
	body: string
}

export const fetchArticles = createAsyncThunk<Article[], undefined, { rejectValue: string }>(
	'articles/fetchArticles',
	async function (_, { rejectWithValue }) {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		if (!response.ok) {
			return rejectWithValue('Server Error!');
		}
		const data = await response.json();
		return data;
	}
);

const articlesSlice = createSlice({
	name: 'articles',
	initialState: initState().articles,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state = action.payload;
			})
	}
});

export default articlesSlice.reducer

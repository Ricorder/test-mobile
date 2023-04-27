import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import initState from '../initState';

interface Article {
	id: number,
	title: string,
	body: string
}

export const fetchArticle = createAsyncThunk<Article, undefined, { rejectValue: string }>(
	'currentArticle/fetchArticle',
	async function (id, { rejectWithValue }) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		if (!response.ok) {
			return rejectWithValue('Server Error!');
		}
		const data = await response.json();
		return data;
	}
);

const currentArticleSlice = createSlice({
	name: 'currentArticle',
	initialState: initState().currentArticle,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticle.fulfilled, (state, action) => {
				state = action.payload;
			})
	}
});

export default currentArticleSlice.reducer

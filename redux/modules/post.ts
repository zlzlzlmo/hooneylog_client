/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { INotionPost } from 'ts/interface/notion';
import { RootState } from '../configStore';

interface IinitialState {
  notionList: INotionPost[];
  filteredNotionList: INotionPost[];
}

const initialState: IinitialState = {
  notionList: [],
  filteredNotionList: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setNotionList: (state, action: PayloadAction<INotionPost[]>) => {
      state.notionList = action.payload;
      state.filteredNotionList = action.payload;
    },

    setFilteredPostList: (state, action: PayloadAction<INotionPost[]>) => {
      state.filteredNotionList = action.payload;
    },
  },
});

export const { setNotionList, setFilteredPostList } = postSlice.actions;
export const getNotionList = (state: RootState) => state.post.notionList;
export const getFilteredNotionList = (state: RootState) => state.post.filteredNotionList;

export default postSlice.reducer;

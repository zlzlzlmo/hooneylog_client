/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { NotionPost } from 'ts/interface/notion';
import { RootState } from '../configStore';

interface IinitialState {
  notionList: NotionPost[];
  filteredNotionList: NotionPost[];
}

const initialState: IinitialState = {
  notionList: [],
  filteredNotionList: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setNotionList: (state, action: PayloadAction<NotionPost[]>) => {
      state.notionList = action.payload;
    },

    setFilteredPostList: (state, action: PayloadAction<NotionPost[]>) => {
      state.filteredNotionList = action.payload;
    },
  },
});

export const { setNotionList, setFilteredPostList } = postSlice.actions;
export const getNotionList = (state: RootState) => state.post.notionList;
export const getFilteredNotionList = (state: RootState) => state.post.filteredNotionList;

export default postSlice.reducer;

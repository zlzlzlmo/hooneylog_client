/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotionPost } from 'ts/interface/notion';
import { RootState } from '../configStore';

interface InitialState {
  notionList: NotionPost[];
  filteredNotionList: NotionPost[];
}

const initialState: InitialState = {
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

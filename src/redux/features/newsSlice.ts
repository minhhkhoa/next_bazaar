// src/store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsState {
  newsId: string | number;
  // sau này có thể thêm các filter khác vào đây
}

const initialState: NewsState = {
  newsId: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsId(state, action: PayloadAction<string>) {
      state.newsId = action.payload;
    },
  },
});

export const { setNewsId } = newsSlice.actions;
export default newsSlice.reducer;

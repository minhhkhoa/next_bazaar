// src/store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedCategoryId: string | null;
  // sau này có thể thêm các filter khác vào đây
}

const initialState: ProductState = {
  selectedCategoryId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { setCategory } = productSlice.actions;
export default productSlice.reducer;

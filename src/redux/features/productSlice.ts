// src/store/productSlice.ts
import { ProductsType } from "@/dataType/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedCategoryId: string | null;
  findProducts: ProductsType[];
  // sau này có thể thêm các filter khác vào đây
}

const initialState: ProductState = {
  selectedCategoryId: null,
  findProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.selectedCategoryId = action.payload;
    },

    setFindProducts(state, action: PayloadAction<ProductsType[]>) {
      state.findProducts = action.payload;
    },
  },
});

export const { setCategory, setFindProducts } = productSlice.actions;
export default productSlice.reducer;

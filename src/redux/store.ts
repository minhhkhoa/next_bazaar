import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice"
import newsSlice from "./features/newsSlice"


//- tao store luu tru
export const store = configureStore({
  reducer: {
    products: productSlice,
    news: newsSlice,
    // ...các slice khác có thể viết dưới này
  },
});

// Lấy kiểu RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice } from "@reduxjs/toolkit";
import { SHOP_DATA } from "../../static/SHOP_DATA";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: SHOP_DATA,
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {},
});
export default cartSlice.reducer;

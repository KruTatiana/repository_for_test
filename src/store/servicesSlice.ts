import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Service } from "../mock-data/types";

const serviceSlice = createSlice({
  name: "services",
  initialState: [] as Service[],
  reducers: {
    addService: (state, action: PayloadAction<Service>) => {
      state.push(action.payload);
    },
  },
});

export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;

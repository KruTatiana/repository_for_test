import { configureStore } from "@reduxjs/toolkit";
import servicesRedusers from "./servicesSlice";

export const store = configureStore({
  reducer: {
    services: servicesRedusers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

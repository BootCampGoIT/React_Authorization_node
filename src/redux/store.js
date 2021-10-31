import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // tasks: persistReducer(tasksConfig, tasksReducer),
  tasks: tasksReducer,
  authorization: persistReducer(authConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

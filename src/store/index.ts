import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from './counter/counterSlice';
import { localstorageMiddleware } from './middleware/localstorageMiddleware';
import pokemonsSlice from './pokemons/pokemons';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localstorageMiddleware as Middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

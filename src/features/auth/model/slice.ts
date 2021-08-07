import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    signIn(store, action) {},
    signUp(store, action) {},
  },
});

export const authReducer = authSlice.reducer;
export const { signIn, signUp, setUser, setLoading } = authSlice.actions;

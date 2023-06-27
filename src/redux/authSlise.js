import { createSlice } from '@reduxjs/toolkit';

import { logOut, logIn, register, refresh } from './operations';
import * as handle from '../redux/handlersActions';

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, handle.handlePending)
      .addCase(register.fulfilled, handle.handleFulfilledRegister)
      .addCase(register.rejected, handle.handleRejected)
      .addCase(logIn.pending, handle.handlePending)
      .addCase(logIn.fulfilled, handle.handleFulfilledLogIn)
      .addCase(logIn.rejected, handle.handleRejected)
      .addCase(logOut.pending, handle.handlePending)
      .addCase(logOut.fulfilled, handle.handleFulfilledLogOut)
      .addCase(logOut.rejected, handle.handleRejected)
      .addCase(refresh.pending, handle.handlePendingRefresh)
      .addCase(refresh.fulfilled, handle.handleFulfilledRefresh)
      .addCase(refresh.rejected, handle.handleRejectedRefresh),
});

export const authReduser = authSlise.reducer;

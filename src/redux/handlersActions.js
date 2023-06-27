export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledFetchContacts = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

export const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
};

export const handleFulfilledDeleteContact = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(item => {
    return item.id !== action.payload.id;
  });
};

export const handleFulfilledRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const handleFulfilledLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const handlePendingRefresh = state => {
  state.isRefreshing = true;
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

export const handleRejectedRefresh = (state, action) => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = action.payload;
};

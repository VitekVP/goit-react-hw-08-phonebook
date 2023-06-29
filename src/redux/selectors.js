export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

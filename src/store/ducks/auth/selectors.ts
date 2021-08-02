import { RootState } from 'store';

export const userSelector = (state: RootState) => state.auth.user;

export const loadingStatusSelector = (state: RootState) => state.auth.isLoading;

import { localStorageAdapter } from "@/adapters/storage/localStorage.adapter";
import { PermissionNames } from "@/constants/permission.constants";
import { User } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user?: User;
  token?: string;
  permissions: PermissionNames[];
}

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  permissions: [],
};

// Initialize state from localStorage
const initializeState = async () => {
  const user = (await localStorageAdapter.getItem("user")) as User | null;
  const token = (await localStorageAdapter.getItem("token")) as string | null;
  const permissions = (await localStorageAdapter.getItem("permissions")) as
    | PermissionNames[]
    | null;

  if (user) initialState.user = user;
  if (token) initialState.token = token;
  if (permissions) initialState.permissions = permissions;
};

// Call initialization
initializeState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorageAdapter.setItem("user", action.payload);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorageAdapter.setItem("token", action.payload);
    },
    setLogout: (state) => {
      state.user = undefined;
      state.token = undefined;
      localStorageAdapter.clear();
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
      localStorageAdapter.setItem("permissions", action.payload);
    },
  },
});

export const { setUser, setToken, setLogout, setPermissions } =
  authSlice.actions;

export default authSlice.reducer;

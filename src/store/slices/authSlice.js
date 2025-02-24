import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (userDetails, { rejectWithValue }) => {
    const config = { withCredentials: true };
    try {
      const res = await axios.post(
        `${apiUrl}/users/login`,
        userDetails,
        config
      );
      console.log(res.data);
      localStorage.setItem("user", res.data.token);
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userDetails, { rejectWithValue }) => {
    const config = { withCredentials: true };
    try {
      const res = await axios.post(`${apiUrl}/users`, userDetails, config);
      console.log(res.data);
      localStorage.setItem("user", res.data.token);
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);

export const verify = createAsyncThunk("auth/verify", async () => {
  const userToken = localStorage.getItem("user") ?? null;
  console.log(userToken);
  try {
    const userDetails = await axios.post(
      `${apiUrl}/users/verifyToken`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    console.log(userDetails.data);
    return userDetails.data;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.get(`${apiUrl}/logout`, config);
  console.log("logging out...");
  localStorage.setItem("user", "");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.currentUser = payload.username;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // register user
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      console;
      state.loading = false;
      state.currentUser = payload.username;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // verify user
    builder.addCase(verify.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(verify.fulfilled, (state, { payload }) => {
      console;
      state.loading = false;
      state.currentUser = payload;
    });
    builder.addCase(verify.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // logout user
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      console;
      state.loading = false;
      state.currentUser = null;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


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
      localStorage.setItem("user", res.headers.authorization.split(" ")[1]);
      return res.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userDetails, { rejectWithValue }) => {
    const config = { withCredentials: true };
    try {
      console.log(userDetails);
      const res = await axios.post(`${apiUrl}/users`, userDetails, config);
      console.log(res);
      localStorage.setItem("user", res.headers.authorization.split(" ")[1]);
      return res.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const verify = createAsyncThunk("auth/verify", async () => {
  const userToken = localStorage.getItem("user");
  if(!userToken) return null;
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
    console.log(userDetails.data.username);
    return userDetails.data.username;
  } catch (e) {
    console.error(e);
    return e;
  }
});

export const logout = createAsyncThunk("auth/logout", () => {
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchAllRockets from './rocketsApi';

const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const rockets = await fetchAllRockets();
      return rockets;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  ready: true,
  rockets: [],
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      ready: false,
      error: null,
    }));
    builder.addCase(fetchRockets.fulfilled, (action) => ({
      ready: true,
      rockets: action.payload,
      error: null,
    }));
    builder.addCase(fetchRockets.rejected, (state, action) => ({
      ...state,
      ready: true,
      error: action.payload,
    }));
  },
});

export default rocketsSlice.reducer;
export {
  fetchRockets,
};

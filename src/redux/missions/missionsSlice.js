import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchAllMissions from './missionsApi';

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const missions = await fetchAllMissions();
      return missions;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const initialState = {
  ready: true,
  missions: [],
  error: null,
};

const missionsSlice = createSlice({
  name: 'misisions',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      ready: false,
      error: null,
    }));
    builder.addCase(fetchMissions.fulfilled, (_, action) => ({
      ready: true,
      missions: action.payload,
      error: null,
    }));
    builder.addCase(fetchMissions.rejected, (state, action) => ({
      ...state,
      ready: true,
      error: action.payload,
    }));
  },
});

export default missionsSlice.reducer;
export {
  fetchMissions,
};

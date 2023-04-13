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
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: true };
      });
      return { ...state, missions };
    },
    leaveMission: (state, action) => {
      const id = action.payload;
      const missions = state.missions.map((mission) => {
        if (mission.mission_id !== id) return mission;
        return { ...mission, reserved: false };
      });
      return { ...state, missions };
    },
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
export const { joinMission, leaveMission } = missionsSlice.actions;
export {
  fetchMissions,
};

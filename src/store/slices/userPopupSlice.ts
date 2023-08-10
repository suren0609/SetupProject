import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userPopupSlice = createSlice({
  name: "userPopup",
  initialState: {
    userProfilePos: {
      top: 0,
      left: 0,
    },
    isUserProfileActive: false,
  },
  reducers: {
    setProfilePosition: (
      state,
      { payload }: PayloadAction<{ top: number; left: number }>,
    ) => {
      state.userProfilePos = payload;
    },
    setIsUserProfileActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isUserProfileActive = payload;
    },
  },
});

export const { setProfilePosition, setIsUserProfileActive } =
  userPopupSlice.actions;

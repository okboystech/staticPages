import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
    
    otpSuccResponse : [],
    otpErrorRespone : [],
    franchiseDetails : {},
    userDetails : {},
    loginResponse : {},
    loginSuccessResponse : {}
};


export const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
      requestOtpAction: (state, action) => {
        state.dashboardMetricsValue = action.payload;
      },
      requestOtpSuccess: (state, action) => {
        state.otpSuccResponse = action.payload;
      },
      requestOtpError: (state, action) => {
        state.otpErrorRespone = action.payload;
      },
      loginWithOtpAction: (state, action) => {
        state.dashboardMetricsValue = action.payload;
      },
      loginSuccess: (state, action) => {
        state.loginSuccessResponse = action.payload.loginResponse;
        state.franchiseDetails = action.payload.franchiseDetails;
        state.loginResponse = action.payload.loginResponse;
        state.userDetails = action.payload.userDetails;
        localStorage.setItem("loginResponseLS", JSON.stringify(action.payload));
      },
      loginError: (state, action) => {
        state.otpErrorRespone = action.payload;
      },
      
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {
    getDashboardMetricsValue,
    requestOtpSuccess,
    requestOtpError,
    loginSuccess,
    loginError
  } = dashboardSlice.actions;
  
  export default dashboardSlice.reducer;
  
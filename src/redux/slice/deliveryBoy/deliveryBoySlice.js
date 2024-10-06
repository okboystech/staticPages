import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
    
    addDeliveryBoySuccResp : {},
    addDeliveryBoyErrorResp : {},
    deliveryListErrResp : {},
};


export const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
      addDeliveryBoyAction: (state, action) => {
        state.addDeliveryBoySuccResp = action.payload;
      },
      addDeliveryBoySuccess: (state, action) => {
        state.addDeliveryBoySuccResp = action.payload.response;
      },
      addDeliveryBoyError: (state, action) => {
        state.addDeliveryBoyErrorResp = action.payload;
      },

      currentRecordSucc: (state, action) => {
        state.currentActiveRecord = action.payload;
      },

      deliveryListSucc: (state, action) => {
        state.deliveryListSuccResp = action.payload.response;
        state.addDeliveryBoySuccResp = {};
        state.addDeliveryBoySuccResp = {};
    state.addDeliveryBoyErrorResp = {};
      },
      deliveryListErr: (state, action) => {
        state.deliveryListErrResp = action.payload;
      }
    
      
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {
    getDashboardMetricsValue,
    addDeliveryBoySuccess,
    addDeliveryBoyError,
    deliveryListSucc,
    deliveryListErr,
    currentRecordSucc,
  } = dashboardSlice.actions;
  
  export default dashboardSlice.reducer;
  
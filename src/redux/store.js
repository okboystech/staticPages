import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from './slice/dashboard/dashboardSlice';
import loginReducer from './slice/login/loginSlice';
import deliveryBoyReducer from './slice/deliveryBoy/deliveryBoySlice';

export const store = configureStore({
    reducer: {
        dashboard : dashboardReducer,
        login : loginReducer,
        deliveryBoy : deliveryBoyReducer
    },
  });
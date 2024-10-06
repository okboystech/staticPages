import { RequestMethod } from '../../../utils/requestMethods';
import {
  requestOtpSuccess,
  requestOtpError,
  loginSuccess,
  loginError
} from './loginSlice';

import {
    POST_REQUEST_OTP,POST_LOGIN
  } from '../../../utils/Url';

  const requestOtpAction = (payload ) => (dispatch) => {
    // console.log('POST_REQUEST_OTP ---- api call' ,payload);
    
    RequestMethod.post(POST_REQUEST_OTP,payload).then(
      (res) => {
        let otp = res.data.response;
        // console.log('POST_REQUEST_OTPl >>>>>>>', otp);
        if (res.status == 200) {
          dispatch(requestOtpSuccess(otp));
        } else {
          dispatch(requestOtpError(res));
        }
      }
    );
  };

  const loginWithOtpAction = (payload ) => (dispatch) => {
    RequestMethod.post(POST_LOGIN,payload).then(
      (res) => {
        let x= res.data;
        let y = x.response;

        if (res.status == 200) {
          dispatch(loginSuccess(y));
        } else {
          dispatch(loginError(y));
        }
      }
    );
  };
  
  export {
    requestOtpAction,
    loginWithOtpAction
  };

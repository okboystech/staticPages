import { RequestMethod } from '../../../utils/requestMethods';
import {
  addDeliveryBoySuccess,
  addDeliveryBoyError,
  deliveryListSucc,
  deliveryListErr,
  currentRecordSucc
} from './deliveryBoySlice';

import {
  POST_ADD_DELIVERY_BOY,GET_DELIVERY_BOY_LIST , PUT_EDIT_DELIVERY_BOY
  } from '../../../utils/Url';

  const addDeliveryBoyAction = (payload) => (dispatch) => {
    //console.log('delivery boy ' ,payload);
    RequestMethod.post(POST_ADD_DELIVERY_BOY,payload).then(
      (res) => {
        let succ = res;
        //console.log('delivery oy addition succ>>>>', succ);
        if (res.status == 200) {
          dispatch(addDeliveryBoySuccess(succ.data));
        } else {
          dispatch(addDeliveryBoyError(res));
        }
      }
    );
  };

  const editDeliveryBoyAction = (payload) => (dispatch) => {
    //console.log('delivery boy ' ,payload);
    let url = PUT_EDIT_DELIVERY_BOY+payload.id;
    RequestMethod.put(url,payload).then(
      (res) => {
        let succ = res;
        //console.log('delivery oy addition succ>>>>', succ);
        if (res.data.statusCode == 200) {
          dispatch(addDeliveryBoySuccess(succ.data));
        } else {
          console.log('delivery deliveryListErr>>>>', res);
          dispatch(addDeliveryBoyError(res));
        }
      }
    );
  };

  const getDeliveryBoyListAction = (payload) => (dispatch) => {
    //console.log('delivery boy ' ,payload);
    RequestMethod.post(GET_DELIVERY_BOY_LIST,payload).then(
      (res) => {
        if (res.data.statusCode == 200) {
          dispatch(deliveryListSucc(res.data));
        } else {
          dispatch(deliveryListErr(res));
        }
      }
    );
  };

  const setCurrentRecordAction = (payload) => (dispatch) => {
    //console.log('delivery boy ' ,payload);
    dispatch(currentRecordSucc(payload));
  };
 
  
  export {
    addDeliveryBoyAction,getDeliveryBoyListAction,setCurrentRecordAction,editDeliveryBoyAction
  };

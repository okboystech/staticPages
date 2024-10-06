import axios from 'axios';

// const  = localStorage.getItem("franchiseDetailsLS");
// const  = localStorage.getItem("userDetailsLS");

export function fetchHeaders() {
  
const loginValues = JSON.parse(localStorage.getItem("loginResponseLS"));
if(loginValues && loginValues.loginResponse){
  const login_access = loginValues.loginResponse;
  const access_token = login_access.access_token;
  console.log("access_token LSLS", access_token);

  return {
    'Content-type': 'application/json',
    'apikey' : '4CD8bMhwyfmv29OxF4pNRr4WtjwXFDrB',
   'authorization' : 'bearer ' + access_token,
  };
} else {
   return {
     'Content-type': 'application/json',
     apikey: '4CD8bMhwyfmv29OxF4pNRr4WtjwXFDrB',
   };
}
}

function getCall(url, customHeader) {
  return axios
    .get(url, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}

function postCall(url, data, customHeader) {
  // console.log('headers', fetchHeaders());
  // console.log('headers url', url);
  // console.log('headers data', data);
  return axios
    .post(url, data, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}
function putCall(url, data, customHeader) {
  return axios
    .put(url, data, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}
function deleteCall(url, customHeader = {}) {
  return axios
    .delete(url, {
      headers: customHeader || fetchHeaders(),
    })
    .then((response) => handleSuccess(response));
}

export const RequestMethod = {
  get: getCall,
  put: putCall,
  post: postCall,
  delete: deleteCall,
};

const handleSuccess = (res) => {
  // do any validations if required
  // console.log('res handle success', res);
  return res;
};

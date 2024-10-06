/*
 * File: Url.js
 * Project: codelabs-boilderplate
 * Created Date: Sun Aug 28 2022 11:42:43 AM
 * Author: Mohammed Parveez <ahamed.parveez@gmail.com>
 * ------------------------------------
 *
 * Copyright (c) 2022 All rights reserved by Codelabs
 * ------------------------------------
 */

import PATTERNS from './Patterns';

/**
 * Function - Converts String to Slug
 * @param {string} string - string to convert
 * @returns {string}
 */
export const convertStringToSlug = (string) => {
  return string?.trim()?.toLocaleLowerCase()?.replace(PATTERNS.REMOVE_ALL_SPACE, '-') ?? '';
};

/**
 * Function - Constructs Query String from Object
 * @param {object} obj - Data in Object
 * @returns
 */
export const constructQueryString = (obj) => {
  return (
    obj &&
    Object.entries(obj)
      ?.map(([key, val]) => (val ? `${key}=${val}` : null))
      ?.filter((val) => val)
      ?.join('&')
  );
};

/**
 * Function - Converts Url String to Object
 * @param {string} queryString - Query string
 * @returns
 */
export const convertQueryStringToObject = (queryString) => {
  let queryObj = {};

  if (!queryString) return queryObj;

  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  pairs?.map((pair) => {
    const obj = pair.split('=');
    if (obj?.[0]) queryObj[obj[0]] = obj?.[1];
  });

  return queryObj;
};

export const BASE_URL = 'https://api.dev.okboys.in/';

export const POST_REQUEST_OTP = BASE_URL+'login/otp';
export const POST_LOGIN = BASE_URL+'login/login';

export const PUT_EDIT_DELIVERY_BOY = BASE_URL + 'user/';
export const POST_ADD_DELIVERY_BOY = BASE_URL + 'user/add-user';
// export const POST_DELIVERY_BOY = BASE_URL + 'user/add-user';
export const GET_DELIVERY_BOY_LIST = BASE_URL + 'query/user/get-users';
// export const GET_DELIVERY_BOY_INFO = BASE_URL + "query/user/get-user/";(pass id here directly)

export const GET_DASHBOARD_METRICS_URL = 'https://fakestoreapi.com/products';

// https://test.api.okboys.in/user/adduseraddress?id=8db37c9f-a495-4b59-8438-5be97c26c32f - update user
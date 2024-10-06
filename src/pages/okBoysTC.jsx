/*
 * File: index.jsx
 * Project: codelabs-boilderplate
 * Created Date: Sun Sep 25 2022 2:12:14 AM
 * Author: Mohammed Parveez <ahamed.parveez@gmail.com>
 * ------------------------------------
 *
 * Copyright (c) 2022 All rights reserved by Codelabs
 * ------------------------------------
 */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LoginLayout from 'src/layouts/LoginLayout';
import okBoyScooter from '@Assets/images/okboy-scooter.png';
import okBoyLogo from '@Assets/images/okboys_logo.png';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@Atoms/Button';
import { useRouter } from 'next/router';
import { Input , notification } from 'antd';

import { requestOtpAction,loginWithOtpAction } from '../redux/slice/login/loginAction';

const Login = () => {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  let [mobileNumber, setMobileNumber] = useState('');
  let [reqOtp, setReqOtp] = useState(true);
  let [otp, setOTP] = useState('');
  let [submit, setSubmit] = useState(true);

  const otpFromResponse = useSelector((state) => state.login.otpSuccResponse);
  const loginResponseData = useSelector((state) => state.login.loginSuccessResponse);

  useEffect(() => {
    setOTP(otpFromResponse)
  },[otpFromResponse])
  

  useEffect(() => {

    if (mobileNumber.length === 10) {
      setReqOtp(false);
    } else {
      setReqOtp(true);
    }
  }, [mobileNumber]);

  useEffect(() => {
    if (otp.length === 4) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [otp]);

  useEffect(() => {
    // console.log('llllllllllll',loginResponseData);
    if (Object.keys(loginResponseData).length > 0){
      api.info({
        message: 'Logged In Successfully!',
        description: '',
        placement : 'topRight', 
      });
      router.push('/dashboard');
    }
  },[loginResponseData]);

  const requestForOTP = () => {
    // console.log('req for otp');    
    let data  = {
      'mobileNumber': `+91${mobileNumber}`,
      'appType':'OK-BOYS-FRANCHISE'
    };
    dispatch(requestOtpAction(data));
  };

  const handleSubmit = () => {
    // console.log('otpFromResponse',otpFromResponse);
    let data = {
      'mobileNumber':  `+91${mobileNumber}`,
      'appType': 'OK-BOYS-FRANCHISE',
      'otp': otpFromResponse
  };
    dispatch(loginWithOtpAction(data));
  };


  return (
    <>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
        Terms and Conditions for Delivery Personnel
        </p>
        <hr />
        <br />
        <p style={{ fontWeight: '100', fontSize: '15px' }}>
          Last Updated: 2-10-2024
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          1. Introduction
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          These Terms and Conditions govern the relationship between okboys and the delivery personnel ("Delivery Personnel"). By accepting a delivery assignment, you agree to comply with these terms.<br />
        </p>
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          2. Employment Status
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          Delivery Personnel are considered [independent contractors/ employees] and are responsible for their own taxes and insurance.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          3. Responsibilities
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Deliver products in a timely and professional manner.
          - Verify the accuracy of deliveries before leaving the pick-up location.
          - Handle all items with care to prevent damage.
          - Communicate with okboys regarding any issues or delays.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          4. Compensation
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Payment will be made directly by the customer on spot subjected  based on completed deliveries.
          - Rates per delivery are displayed to customer and delivery boy .
          - Additional bonuses may apply for exceptional service or performance.
        </p>
        <br />

        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          5. Work Schedule
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Delivery Personnel will be scheduled based on availability and demand.
          - Changes to the schedule must be communicated at least 1 week  in advance.

        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          6. Equipment and Expenses
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Delivery Personnel must provide their own [vehicle, smartphone, etc.].
          - OKboys  will not cover costs associated with fuel, maintenance, or other related expenses.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          7. Code of Conduct
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Maintain professionalism at all times when representing franchise .
          - Follow all local traffic laws and safety regulations.
          - Treat customers with respect and courtesy.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          8. Confidentiality
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Delivery Personnel must keep all customer and company information confidential and not disclose it to any third parties.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          9. Liability
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Delivery Personnel are responsible for any damage or loss caused during the delivery process.
          - okboys is not liable for any accidents or incidents occurring during deliveries.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          10. Termination
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Either party may terminate this agreement with one week notice.
          - Immediate termination may occur for violation of these terms or misconduct.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          11. Amendments
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - okboys  reserves the right to modify these terms at any time. Delivery Personnel will be notified of any changes.</p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          12. Governing Law
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - These terms shall be governed by the laws of the land </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          13. Acceptance
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          By accepting a delivery assignment, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
        </p><br />
      </div>
      </>
  );
};

export default Login;

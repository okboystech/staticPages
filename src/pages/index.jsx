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
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '40%' }}>Franchise List</p>
      </div>
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Terms and Conditions for okboys
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
          Welcome to okboys. By using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          2. Acceptance of Terms
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          By accessing or using the services, you agree to be legally bound by these terms. If you do not agree, please do not use the app.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          3. Eligibility
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          You must be at least 21 years old and have the legal capacity to enter into contracts to use our services.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          4. Account Registration
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Users must create an account to place orders.
          - You are responsible for maintaining the confidentiality of your account information.
          - Notify us immediately of any unauthorized use of your account.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          5. Order Placement
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Users can browse restaurants and place orders through the app.
          - All orders are subject to availability.
          - Prices are based on vendors price @ that shop.
        </p>
        <br />

        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          6. Payment Terms
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Payments can be made by mobile wallets, or other accepted methods.
          - By placing an order, you authorize us to charge your selected payment method.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          7. Delivery
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - We will make reasonable efforts to deliver orders within the estimated time frame, but we cannot guarantee delivery times.
          - You are responsible for providing accurate delivery information.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          8. Cancellation and Refunds
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Orders may be canceled within a specified time frame, subject to cancellation fees.
          - Refunds are processed according to our refund policy.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          9. User Conduct
        </p>
        <br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Users agree not to misuse the app, including but not limited to fraud, harassment, or illegal activities.
          - We reserve the right to suspend or terminate accounts for violations.
        </p>
        <br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          10. Intellectual Property
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - All content, trademarks, and other intellectual property in the app are owned by okboys or its licensors.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          11. Limitation of Liability
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - Okboys is not liable for any indirect, incidental, or consequential damages arising from your use of the app or services.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          12. Indemnification
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - You agree to indemnify and hold harmless okboys, its affiliates, and employees from any claims, losses, or damages arising from your use of the app.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          13. Modifications to Terms
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - We may update these terms at any time. Continued use of the app constitutes acceptance of the new terms.
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          14. Governing Law
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>
          - These terms shall be governed by the laws of the land .
        </p><br />
        <p style={{ fontWeight: '600', fontSize: '20px' }}>
          15. Contact Information
        </p><br />
        <p style={{ fontWeight: '200', fontSize: '15px' }}>

          For any questions or concerns regarding these terms, please contact us at +919908419165.
        </p><br />

      </div>
      </>
  );
};

export default Login;

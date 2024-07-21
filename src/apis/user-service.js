import axios from "axios";
import { MyAxios } from "./bootapi";

export const signUp = (user) => {
    return MyAxios.post('/api/v1/auth/', user)
        .then((response) => response.data)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

export const loginUsingPassword = (user) => {
    return MyAxios.post('/api/v1/auth/loginP', user)
        .then((response) => response.data)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

export const loginUsingOTP = (user) => {
    return MyAxios.post('/api/v1/auth/send-OTP', user)
        .then((response) => response.data)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

export const verifyOTP = (otp) => {
    return MyAxios.post('/api/v1/auth/verify-otp', otp)
        .then((response) => response.data.otp)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

export const createOrder = (data) => {
    return MyAxios.post('/user/create_order', data)
    .then((response) => response.data)
    .catch((error) => {
        console.log('Error in creating order id');
        throw error;
    })
}
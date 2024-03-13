import React, { useEffect, useState } from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import "./LoginForNewUser.css";
import LoginLeftComponent from "./LoginLeftComponent";
import { signUp } from "../../apis/user-service";
import { Button, Container, FormFeedback, FormGroup } from "reactstrap";
import { Route, Routes, redirect, useNavigate } from "react-router";
import Home from "../Home/Home";
import { ToastContainer, Bounce, toast } from 'react-toastify';

const LoginForNewUser = () => {

    const navigate = useNavigate();

    // getting and setting data from the form
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        address: '',
        state: '',
        city: '',
        pincode: ''
    })

    // handling errors
    const [error, setError] = useState({
        errors: {},
        isError: false
    })

    // useEffect is running to display the changes
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    // handle change is basically used to access form
    const handleChange = (event, props) => {
        console.log("changing");
        // dynamically setting the values
        setData({ ...data, [props]: event.target.value });

        /*
        This is also the way but used only for single values one value is setting in all the field values
        setData({...data, last_name: event.target.value});
        setData({...data, email: event.target.value});
        setData({...data, phone_number: event.target.value});
        setData({...data, password: event.target.value});
        setData({...data, address: event.target.value});
        setData({...data, state: event.target.value});
        setData({...data, city: event.target.value});
        setData({...data, pincode: event.target.value});
        */
    }

    // resetting form
    const resetData = () => {
        <ToastContainer position="top-center" />

        setData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            password: '',
            address: '',
            state: '',
            city: '',
            pincode: ''
        })
    }

    // submit the form
    const submitForm = (event) => {
        event.preventDefault() // stopping the default actions on submitting form
        console.log(data);

        if(error.isError == true){
            toast.error("Form data is invalid !!");
            return;
        }

        // data validate

        // call server api for sending data
        signUp(data).then((resp) => {
            console.log(resp);
            console.log("success");

            toast.success('You have successfully registered !!', {position: "top-center"});
            setData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                password: '',
                address: '',
                state: '',
                city: '',
                pincode: ''
            })
            navigate('/'); // Redirect to the home page

        }).catch((err) => {
            console.log(err);
            console.log("error");

            setError({
                errors: error,
                isError: true
            })
        });
    };
    
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>

    return (
        <div className="" style={{ display: "flex", padding: "5% 10%", height: "50%" }}>
            <LoginLeftComponent />

            <div className="" style={{ backgroundColor: "black", color: "white", width: "46%", borderRadius: "0% 10% 10% 0%" }}>
                <div style={{ padding: "5% 7%", fontSize: "30px" }}>
                    <h2><b>Register</b></h2>
                </div>

                <form onSubmit={submitForm} style={{ paddingLeft: "4%" }}>
                    <div class="form-row" style={{ display: "flex" }}>

                        <FormGroup>
                            <label for="first_name">First Name</label>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                                onChange={(e) => handleChange(e, 'first_name')}
                                id="first_name"
                                placeholder="Enter first name"
                                value={data.first_name}
                                required
                                // onInvalid={ error.errors?.response?.data?.first_name ? true : false }
                            />

                            {/* <FormFeedback>
                                {error.errors?.response?.data?.first_name}
                            </FormFeedback> */}
                        </FormGroup>

                        <FormGroup>
                            <label for="last_name">Last Name</label>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                                id="last_name"
                                onChange={(e) => handleChange(e, 'last_name')}
                                placeholder="Enter last name"
                                value={data.last_name}
                            />
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <label for="email">Email</label>
                        <input type="email" class="form-control" style={{ width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                            onChange={(e) => handleChange(e, 'email')}
                            id="email"
                            value={data.email}
                            required
                            placeholder="abc@gmail.com" />
                    </FormGroup>

                    <FormGroup>
                        <label for="phone_number">Phone Number</label>
                        <input type="number" class="form-control" style={{ width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                            id="phone_number"
                            onChange={(e) => handleChange(e, 'phone_number')}
                            value={data.phone_number}
                             required
                            placeholder="Enter phone number" />
                    </FormGroup>

                    <FormGroup>
                        <label for="password">Password</label>
                        <input type="password" class="form-control" style={{ width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                            id="password"
                            required
                            onChange={(e) => handleChange(e, 'password')}
                            value={data.password}
                            placeholder="Enter password" />
                    </FormGroup>

                    <FormGroup>
                        <label for="address">Address</label>
                        <input type="text" class="form-control" style={{ width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                            id="address"
                            onChange={(e) => handleChange(e, 'address')}
                            value={data.address}
                            placeholder="1234 Main St" />
                    </FormGroup>

                    <div class="form-row" style={{ display: "flex" }}>
                        <FormGroup>
                            <label for="city">City</label>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                                value={data.city}
                                id="city"
                                onChange={(e) => handleChange(e, 'city')}
                                placeholder="Gurgaon" />
                        </FormGroup>

                        <FormGroup>
                            <label for="state">State</label>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                                value={data.state}
                                id="state"
                                onChange={(e) => handleChange(e, 'state')}
                                placeholder="Haryana" />
                        </FormGroup>

                        <FormGroup>
                            <label for="pincode">Pincode</label>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white", borderColor: "white" }}
                                // value={data.pincode}
                                onChange={(e) => handleChange(e, 'pincode')}
                                id="pincode"
                                placeholder="122001" />
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required />
                            <label class="form-check-label" for="gridCheck">
                                Accepting all terms & conditions
                            </label>
                        </div>
                    </FormGroup>

                    <Container className="left" style={{marginBottom: "4%"}}>
                        <Button color="primary" size="sm">Submit</Button>{' '}
                    </Container>
                </form>
            </div>
        </div>
    );
};

export default LoginForNewUser;
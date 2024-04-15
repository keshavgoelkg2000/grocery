import React, { useEffect, useState } from "react";
import LoginLeftComponent from "./LoginLeftComponent";
import LoginHeader from "./LoginHeader";
import { Button, Container, FormGroup } from "reactstrap";
// import { Route, Routes, useNavigate } from "react-router";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { loginUsingOTP } from "../../apis/user-service";
import { toast } from "react-toastify";
import LUOVerify from "./LUOVerify";
import Home from "../Home/Home";


const LoginForExistingUser = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        phone_number: ''
    })

    const handleChange = (event, props) => {
        setData({...data, [props]: event.target.value });
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(data);

        if(data.phone_number.trim() == '' || data.phone_number.length != 10){ // trim used to remove blank
            toast.error("Please enter correct phone number !!", {position: "top-center"});
            setData({...data, 'phone_number': ''});
            return;
        }

        loginUsingOTP(data).then((resp) => {
            console.log("success !!")
            toast.success("OTP sent successfully !!", {position: "top-center"});
            navigate("/LUOVerify");
        }).catch((err) => {
            toast.warning("Something went wrong !!");
            console.log("error !!")
        })
    };

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/LUOVerify" element= {<LUOVerify/>} />
    </Routes>

    useEffect( () => {
        document.title = "Login using OTP | True Bazaar";
    } )

    return (
        <div className="" style={{ display: "flex", padding: "10%", height: "50%" }}>

            <LoginLeftComponent/>

            <div className="" style={{backgroundColor: "black", color: "white", width: "38%", borderRadius: "0% 10% 10% 0%" }}>

                <LoginHeader heading={"Login"} p={"using OTP"}/>

                <form onSubmit={submitForm} >
                    <FormGroup style={{padding: "0px 6%"}}>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", fontSize: "12px", height: "4vh", borderRadius: "8px"}}
                            id="phone_number"
                            onChange={(e)=> handleChange(e, 'phone_number')}
                            value={data.phone_number}
                            placeholder="Enter your phone number" />
                    </FormGroup>

                    <Container style={{marginBottom: "4%", paddingLeft: "6%"}}>
                        <Button color="primary" size="sm">Send OTP</Button>{' '}
                    </Container>

                    <div style={{ fontSize: "10px", marginLeft: "6%", width: "70%", marginTop: "2%"}}>
                        <label class="form-check-label" for="exampleCheck1">By continuing, I accept TCP - TrueBazaar's Terms and Conditions & Privacy Policy.</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForExistingUser;
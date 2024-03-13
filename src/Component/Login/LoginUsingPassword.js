import {React, useEffect, useState} from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "../Home/Home";
import LoginForExistingUser from "./LoginUsingOTP";
import LoginForNewUser from "./LoginForNewUser";
import LoginLeftComponent from "./LoginLeftComponent";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import LoginHeader from "../LoginHeader";
import base_url from './../../apis/bootapi';
import axios from "axios";
import { signUp } from "../../apis/user-service";
import { loginUsingPassword } from "../../apis/user-service";
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        phone_number: '',
        password: '',
    })

    const handleChange = (event, props) => {
        // console.log(data);
        setData({...data, [props]: event.target.value });
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(data);

        if(data.phone_number.trim() == '' || data.password.trim() == ''){ // trim used to remove blank
            toast.error("Please enter login details !!", {position: "top-center"});
            return;
        }
        else if(data.phone_number.length != 10){
            toast.error("Please enter correct phone number !!", {position: "top-center"});
            setData({...data, 'phone_number': ''});
            return;
        }

        loginUsingPassword(data).then((response) => {
            console.log("success");
            toast.success('You have logged in !!', {position: "top-center"});
            setData({
                phone_number: '',
                password: '',
            })
            navigate('/'); // Redirect to the home page
        })
        .catch((error) => {
            console.log("error");
        });
    };

    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>

    useEffect(()=>{
        document.title = "Login | True Bazaar";
    })

    return (
        <div className="" style={{ display: "flex", padding: "10%", height: "50%" }}>

            <LoginLeftComponent/>

            <div className="" style={{backgroundColor: "black", color: "white", width: "38%", borderRadius: "0% 10% 10% 0%" }}>

                <LoginHeader heading={"Login"} p={"using password"}/>

                <form onSubmit={submitForm} >
                    <FormGroup style={{padding: "0px 6%"}}>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", fontSize: "12px", height: "4vh", borderRadius: "8px"}}
                            id="phone_number"
                            onChange={(e)=> handleChange(e, 'phone_number')}
                            value={data.phone_number}
                            placeholder="Enter your phone number" />
                    </FormGroup>

                    <FormGroup style={{padding: "0px 6%"}}>
                            <input type="text" class="form-control" style={{ width: "90%", padding: "10px", fontSize: "12px", height: "4vh", borderRadius: "8px" }}
                            id="password"
                            onChange={(e)=> handleChange(e, 'password')}
                            value={data.password}
                            placeholder="Enter your password" />
                    </FormGroup>

                    <Container style={{marginBottom: "4%", paddingLeft: "6%"}}>
                        <Button color="primary" size="sm">Submit</Button>{' '}
                    </Container>

                    <div style={{ fontSize: "10px", marginLeft: "6%", width: "70%", marginTop: "2%"}}>
                        <label class="form-check-label" for="exampleCheck1">By continuing, I accept TCP - TrueBazaar's Terms and Conditions & Privacy Policy.</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
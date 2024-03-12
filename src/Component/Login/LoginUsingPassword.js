import {React, useEffect} from "react";
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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import LoginHeader from "../LoginHeader";
import base_url from './../../apis/bootapi';
import axios from "axios";

const Login = () => {

    useEffect(()=>{
        document.title = "Login | True Bazaar";
    })

    return (
        <div className="" style={{ display: "flex", padding: "10%", height: "50%" }}>

            <LoginLeftComponent/>

            <div className="" style={{backgroundColor: "black", color: "white", width: "38%", borderRadius: "0% 10% 10% 0%" }}>

                <LoginHeader heading={"Login"} p={"using password"}/>

                <form action="/loginPassword" method="post" >
                    <FormGroup style={{padding: "0px 6%"}}>
                            <input type="text" class="form-control" id="phoneNumber" style={{ width: "90%", padding: "10px", fontSize: "12px", height: "4vh", borderRadius: "8px"}} aria-describedby="phoneNumber" placeholder="Enter your phone number" />
                    </FormGroup>

                    <FormGroup style={{padding: "0px 6%"}}>
                            <input type="text" class="form-control" id="password" style={{ width: "90%", padding: "10px", fontSize: "12px", height: "4vh", borderRadius: "8px" }} aria-describedby="emailHelp" placeholder="Enter your password" />
                    </FormGroup>

                    <button type="submit" class="btn btn-primary" style={{color: "#b5bdc5", backgroundColor: "#551717", marginLeft: "6%", width: "62%", borderRadius: "8px", border: "1px solid black"}}>
                        <b>Submit</b>
                    </button>

                    <div style={{ fontSize: "10px", marginLeft: "6%", width: "70%", marginTop: "2%"}}>
                        <label class="form-check-label" for="exampleCheck1">By continuing, I accept TCP - TrueBazaar's Terms and Conditions & Privacy Policy.</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
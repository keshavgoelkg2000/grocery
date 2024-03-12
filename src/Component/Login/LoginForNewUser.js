import React from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
// import FaFolderOpen from 'react-icons/lib/fa/folder-open';
// import FaFileCodeO from 'react-icons/lib/fa/file-code-o';
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import "./LoginForNewUser.css";
import LoginLeftComponent from "./LoginLeftComponent";

const LoginForNewUser = () => {
    return (
        <div className="" style={{ display: "flex", padding: "5% 10%", height: "50%" }}>
            <LoginLeftComponent/>

            <div className="" style={{backgroundColor: "black", color: "white", width: "46%",borderRadius: "0% 10% 10% 0%"}}>
                <div style={{ padding: "5% 7%", fontSize: "30px" }}>
                    <h2><b>Register</b></h2>
                </div>

                <form style={{paddingLeft: "4%"}}>
                    <div class="form-row" style={{display: "flex"}}>
                        <div class="form-group col-md-6" >
                            <label for="firstName">FirstName</label>
                            <input type="text" class="form-control" id="firstName" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} 
                                placeholder="Enter first name" required/>
                        </div>

                        <div class="form-group col-md-6" >
                            <label for="lastName">LastName</label>
                            <input type="text" class="form-control" id="lastName" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} 
                                placeholder="Enter last name"/>
                        </div>
                    </div>
                    
                    <div class="form-group" style={{paddingTop: "6px"}}>
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" style={{width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} placeholder="abc@gmail.com"/>
                    </div>
                    
                    <div class="form-group" style={{paddingTop: "6px"}}>
                        <label for="inputPhoneNumber">Phone Number</label>
                        <input type="number" class="form-control" id="inputPhoneNumber" style={{width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} placeholder="Enter phone number"/>
                    </div>
                    
                    <div class="form-group" style={{paddingTop: "6px"}}>
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" style={{width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} placeholder="Enter password"/>
                    </div>
                    
                    <div class="form-group" style={{paddingTop: "6px"}}>
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" style={{width: "95%", padding: "0px 10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} placeholder="1234 Main St"/>
                    </div>

                    <div class="form-row" style={{display: "flex", paddingTop: "8px"}}>
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} id="inputCity" placeholder="Gurgaon"/>
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" class="form-control" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} id="inputState" placeholder="Haryana"/>
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputZip">Pincode</label>
                            <input type="text" class="form-control" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}} id="inputZip" placeholder="122001" />
                        </div>
                    </div>

                    <div class="form-group" style={{padding: "6px 0px"}}>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" required/>
                            <label class="form-check-label" for="gridCheck">
                                Accepting all terms & conditions
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style={{fontSize: "13px", margin: "15px 0px", padding: "2px 0px", borderRadius: "8px", width: "20%", backgroundColor: "#0404d7", color: "white"}}>
                        Submit
                    </button>
                    </form>
                

{/* 
                <form style={{
                    paddingLeft: "4%"
                }}>
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" />
                        </div>
                    </div>

                    <div class="form-group" style={{
                        textAlign: "center", width: "70%", marginLeft: "2.5%", marginTop: "3%"
                    }}>
                        

                        <input type="text" class="form-control" id="exampleInputEmail1" style={{
                            width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",
                            borderRadius: "8px", border: "1px solid white", borderColor: "white"
                        }}
                            aria-describedby="emailHelp"
                            placeholder="Enter "
                        />

                        <div className="innerOR" style={{
                            margin: "2% 0%"
                        }}>
                            <h2 style={{
                                fontSize: "10px"
                            }}>Or</h2>
                        </div>

                        <input type="text" class="form-control" id="exampleInputEmail1" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white" }} aria-describedby="emailHelp" placeholder="Enter Password" />
                        {/* <div>
                            <a href="#" style={{ textAlign: "right", fontSize: "10px", color: "cornflowerblue", textDecoration: "none" }}>Forgot Password?</a>
                        </div> */}

{/* 
                    </div>
                    <button type="submit" class="btn btn-primary"
                        style={{
                            color: "rgb(141, 127, 127)", backgroundColor: "#551717",
                            marginTop: "6%", marginLeft: "6%", width: "62%", borderRadius: "8px"
                        }}
                    ><b>Continue</b></button>
                    <div class="form-check" style={{ width: "70%", paddingLeft: "5.5%", paddingTop: "1%", display: "flex", paddingBottom: "5%" }}> */}
                        {/* <div>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        </div> */}
                        {/* <div style={{ fontSize: "10px", padding: "4px" }}>
                            <label class="form-check-label" for="exampleCheck1">By continuing, I accept TCP - TrueBazaar's Terms and Conditions & Privacy Policy
                                This site is protected by reCAPTCHA and the Google - Privacy Policy and & Terms of Service apply.</label>
                        </div>
                    </div>
                </form> */}
                 
            </div>
        </div>
    );
};

export default LoginForNewUser;
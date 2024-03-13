import React from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
// import FaFolderOpen from 'react-icons/lib/fa/folder-open';
// import FaFileCodeO from 'react-icons/lib/fa/file-code-o';
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import LoginLeftComponent from "./LoginLeftComponent";
import LoginHeader from "../LoginHeader";

const LoginForExistingUser = () => {
    return (
        <div className="" style={{ display: "flex", padding: "10%", height: "50%" }}>
            
            <LoginLeftComponent/>

            <div className="" style={{backgroundColor: "black", color: "white", width: "38%",borderRadius: "0% 10% 10% 0%"}}>
                <LoginHeader heading={"Login"} p={"using OTP"} />

                <form style={{paddingLeft: "4%"}}>
                    <div class="form-group" style={{textAlign: "center", width: "70%", marginLeft: "2.5%", marginTop: "3%"}}>
                        <input type="text" class="form-control" id="exampleInputEmail1" style={{width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh",borderRadius: "8px", border: "1px solid white", borderColor: "white"}}
                            aria-describedby="emailHelp" placeholder="Enter phone number"/>
                        <div style={{textAlign: "right", padding: "10px"}}>
                            <a href="#" style={{fontSize: "10px", color: "cornflowerblue", textDecoration: "none" }}>Send OTP</a>
                        </div>

                        <input type="text" class="form-control" id="exampleInputEmail1" style={{ width: "90%", padding: "10px", color: "black", fontSize: "12px", height: "4vh", borderRadius: "8px", border: "1px solid white" }} aria-describedby="emailHelp" placeholder="Enter OTP" />
                    </div>
                    <button type="submit" class="btn btn-primary"
                        style={{
                            color: "rgb(141, 127, 127)", backgroundColor: "#551717",
                            marginTop: "6%", marginLeft: "6%", width: "62%", borderRadius: "8px"
                        }}
                    ><b>Continue</b></button>
                    <div class="form-check" style={{ width: "70%", paddingLeft: "5.5%", paddingTop: "1%", display: "flex", paddingBottom: "5%" }}>
                        {/* <div>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        </div> */}
                        <div style={{ fontSize: "10px", padding: "4px" }}>
                            <label class="form-check-label" for="exampleCheck1">By continuing, I accept TCP - TrueBazaar's Terms and Conditions & Privacy Policy
                                This site is protected by reCAPTCHA and the Google - Privacy Policy and & Terms of Service apply.</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForExistingUser;
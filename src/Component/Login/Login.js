import {React, useEffect} from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import Home from "../Home/Home";
import LoginForExistingUser from "./LoginUsingOTP";
import LoginForNewUser from "./LoginForNewUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import LoginLeftComponent from "./LoginLeftComponent";
import {Routes, Route, useNavigate} from 'react-router-dom';
import LoginUsingPassword from './LoginUsingPassword';
import LoginUsingOTP from './LoginUsingOTP';
import LoginHeader from "./LoginHeader";


const Login = () => {

    useEffect( () => {
        document.title = "Login";
    }, []);

    const navigate = useNavigate();

    const navigateToLoginWIthPass = () => {
        navigate('/loginUsingPassword');
    };

    const navigateToLoginWithOTP = () => {
        navigate('/LoginUsingOTP');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <div className="" style={{ display: "flex", padding: "7% 0% 2% 0%", textAlign: "center", margin: "5% 10%"}}>

            <LoginLeftComponent />

            <div className="" style={{backgroundColor: "black", color: "white", width: "35%", borderRadius: "0% 10% 10% 0%" }}>
                <LoginHeader heading={"Login/Sign up"}/>

                <form>
                    <Container>
                        <button type="submit" class="btn btn-primary" onClick={navigateToLoginWIthPass} style={{border: "1px solid #6a4545", color: "rgb(141, 127, 127)", backgroundColor: "#551717",margin: "6% 0% 2% 0%", width: "62%", borderRadius: "8px"}}
                            ><b>Login Using Password</b>
                        </button>
                    </Container>

                    <Container>
                        <button type="submit" class="btn btn-primary" onClick={navigateToLoginWithOTP} style={{border: "1px solid #6a4545", color: "rgb(141, 127, 127)", backgroundColor: "#551717",margin: "8% 0% 2% 0%", width: "62%", borderRadius: "8px"}}
                            ><b>Login Using OTP</b>
                        </button>
                    </Container>

                    <Container>
                        <button type="submit" class="btn btn-primary" onClick={navigateToRegister} style={{border: "1px solid #6a4545", color: "rgb(141, 127, 127)", backgroundColor: "#551717",margin: "8% 0% 0% 0%", width: "62%", borderRadius: "8px"}}
                            ><b>Register</b>
                        </button>
                    </Container>

                    <Routes>
                        <Route path='/loginUsingPassword' element={<LoginUsingPassword/>} />
                        <Route path='/LoginUsingOTP' element={<LoginUsingOTP/>} />
                        <Route path='/register' element={<LoginForNewUser/>} />
                    </Routes>

                </form>
            </div>
        </div>
    );
};

export default Login;
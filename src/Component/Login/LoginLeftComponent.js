import React from "react";

import { TfiAlarmClock } from "react-icons/tfi";
import { GiSurferVan } from "react-icons/gi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MdOutlineFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";

const LoginLeftComponent = () => {
    return (
        <div className="" style={{ width: "35%", backgroundColor: "#c4e45429", textAlign: "center", borderRadius: "10% 0% 0% 10%" }}>
            <div style={{ fontSize: "26px", textAlign: "center", paddingTop: "10%", paddingRight: "6%", paddingLeft: "6%" }}>
                <h1><b>Why choose True Bazaar ?</b></h1>
            </div>

            <div>
                <div className="shared-class" style={{ display: "flex", padding: "7%" }}>
                    <div style={{ width: "50%" }}>
                        <TfiAlarmClock style={{ width: "100%", height: "25px" }} />
                        <p><b>On Time</b></p>
                    </div>
                    <div style={{ width: "38%" }}>
                        <GiSurferVan style={{ width: "100%", height: "25px" }} />
                        <p><b>Return Policy</b></p>
                    </div>
                </div>
                <div style={{ display: "flex", padding: "7%" }}>
                    <div style={{ width: "50%" }}>
                        <MdOutlineFastfood style={{ width: "100%", height: "25px" }} />
                        <p><b>Quality</b></p>
                    </div>
                    <div style={{ width: "38%" }}>
                        <MdDeliveryDining style={{ width: "100%", height: "25px" }} />
                        <p><b>Free Delivery</b></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginLeftComponent;
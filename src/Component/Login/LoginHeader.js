import React from "react";

const LoginHeader = ({heading, p}) => {
    return (
        <div style={{ padding: "12% 0% 2% 6%", fontSize: "30px" }}>
            <h2><b>{heading}</b></h2>
            <p style={{ fontSize: "small" }}><b>{p}</b></p>
        </div>
    );
};

export default LoginHeader;
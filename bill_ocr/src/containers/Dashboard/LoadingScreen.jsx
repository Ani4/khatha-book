import React from "react";
import ReactLoading from "react-loading";

const LoadingScreen = ({ type, color }) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "100%",
        }}
    >
        <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
    </div>
);

export default LoadingScreen;

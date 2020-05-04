// import React from "react";
// import ReactLoading from "react-loading";

// const LoadingScreen = ({ type, color }) => (
//     <div
//         style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "80vh",
//             width: "100%",
//         }}
//     >
//         <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
//     </div>
// );

// export default LoadingScreen;

import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: "#4e73df";
`;
const loading_react = css`
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Loading() {
    return (
        <div css={loading_react}>
            <ClipLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={true}
            />
        </div>
    );
}

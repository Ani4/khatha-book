import React from "react";
import LoadingScreen from "../Dashboard/LoadingScreen";

export default function Loading() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <LoadingScreen />
            </div>
        </>
    );
}

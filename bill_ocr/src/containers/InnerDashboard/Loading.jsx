import React from "react";

export default function Loading() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                    height: "100%",
                }}
            >
                <div
                    className="load-wrapp"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                    }}
                >
                    <div className="load-1">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
            </div>
        </>
    );
}

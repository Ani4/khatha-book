import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { api } from "./config/api";
import { baseUrl } from "./config/config";
import Dashboard from "./containers/Dashboard/Dashboard";
import LoginMain from "./containers/Login/LoginMain";
import LoadingScreen from "./containers/Dashboard/LoadingScreen";
import { useToasts } from "react-toast-notifications";

export default function App() {
    // toaster
    const { addToast } = useToasts();

    // state
    const [loginCheck, setLoginCheck] = useState(false);
    const [loading, setLoading] = useState(true);

    // logout
    const handleLogout = () => {
        api.get(baseUrl + "user/logout").then(() => {
            setLoginCheck(false);
            localStorage.removeItem("user_for_bill_ocr");
        });
        addToast("Logout successfully", {
            appearance: "success",
            autoDismiss: true,
        });
    };

    // auto login
    const autoLogin = () => {
        let rememberMe = localStorage.getItem("remember_me_for_bill_ocr");

        if (Boolean(rememberMe))
            api.get(baseUrl + "checkToken")
                .then(({ data }) => {
                    if (data === "OK") {
                        setLoginCheck(true);
                        setLoading(false);
                    } else setLoading(false);
                })
                .then(() =>
                    addToast("Login successfully with old credentials", {
                        appearance: "success",
                        autoDismiss: true,
                    })
                )
                .catch((err) => setLoading(false));
        else setLoading(false);
    };

    // run onces when the component load
    useEffect(() => {
        autoLogin();
    }, []);

    // return markup
    if (loading)
        return (
            <div style={{ height: "100vh", width: "100vw" }}>
                <LoadingScreen type={"bars"} color={"#4e73df"} />
            </div>
        );
    return (
        <Router>
            {loginCheck ? (
                <Dashboard handleLogout={handleLogout} />
            ) : (
                <LoginMain setLoginCheck={setLoginCheck} />
            )}
        </Router>
    );
}

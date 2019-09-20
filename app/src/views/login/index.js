import React, { useState } from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

import { loginApi } from "api";
import { loginBaseUrl } from "shared/constants/api-selectors";

import Login from "./login-page";

const Container = () => {
    const [user, setUser] = useState();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const login = useApi({
        action: loginDetails => console.log('loginApi.login(loginBaseUrl, loginDetails)'),
        initialValue: [],
        defer: true,
        onSuccess: user => {
            if (user.Name == null) throw Error("Incorrect login details");
            toast.success("Welcome " + user.Name);
            setUser({ Name: "Login" });
            setIsUserLoggedIn(true);
        },
        onError: e => toast.error(e.message)
    },[]);

    return (
        <Login
            isUserLoggedIn={isUserLoggedIn}
            user={user}
            onUserLogin={login.execute}
        />
    );
};

export default Container;

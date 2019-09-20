import React, { useState } from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

import { loginApi } from "api";
import { loginBaseUrl } from "shared/constants/api-selectors";

import Signup from "./sign-up";

const Container = () => {
    const [user, setUser] = useState();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const signup = useApi({
        action: signupDetails => loginApi.signup(loginBaseUrl, signupDetails),
        initialValue: [],
        defer: true,
        onSuccess: userSignup => {
            if (userSignup.user == null) throw Error(userSignup.message);
            toast.success("Signed up successfully");
            setUser(userSignup.user);
            setIsUserLoggedIn(true);
        },
        onError: e => toast.error(e.message)
    }, []);

    return (
        <Signup
            onUserSignup={signup}
        />
    );
};

export default Container;

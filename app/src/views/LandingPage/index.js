import React, { useState } from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

import { loginApi } from "api";
import { loginBaseUrl } from "shared/constants/api-selectors";

import LandingPage from "./LandingPage";
import LoginPage from "views/login/login-page.js";
import SignupPage from "views/sign-up/sign-up.js";

const Container = () => {
    const [userSession, setUserSession] = useState({
        state: {
            login: false,
            signup: false,
            registration: false,
            isLoggedIn: false
        }
    });

    const login = useApi({
        action: loginDetails => loginApi.login(loginBaseUrl, loginDetails),
        initialValue: [],
        defer: true,
        onSuccess: user => {
            if (user.FirstName == null) throw Error("Incorrect login details");
            toast.success("Welcome " + user.FirstName);
            setUserSession({
                ...userSession,
                user,
                state: {
                    ...userSession.state,
                    login: false,
                    isLoggedIn: true
                }
            });
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection" : e.message)
    },[]);

    const signup = useApi({
        action: signupDetails => loginApi.signup(loginBaseUrl, signupDetails),
        initialValue: [],
        defer: true,
        onSuccess: userSignup => {
            if (userSignup.User == null) throw Error(userSignup.message);
            toast.success("Welcome " + userSignup.User.FirstName);
            setUserSession({
                ...userSession,
                user: userSignup.User,
                state: {
                    ...userSession.state,
                    signup: false,
                    isLoggedIn: true
                }
            });
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection" : e.message)
    }, []);
    
    return (
        userSession.state.login || userSession.state.signup 
        ? userSession.state.login 
            ? <LoginPage 
                userSession={userSession}
                setUserSession={setUserSession}
                onLogin={login}
              />
            : <SignupPage 
                userSession={userSession}
                setUserSession={setUserSession}
                onSignup={signup.execute}
              />
        :<LandingPage
            userSession={userSession}
            setUserSession={setUserSession}
          />
    );
};

export default Container;

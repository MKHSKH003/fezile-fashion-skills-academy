import React, { useState } from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

import { loginsApi, emailsApi } from "api";
import { loginsBaseUrl, emailsBaseUrl } from "shared/constants/api-selectors";
import Spinner from "shared/components/spinner/spinner.js";

import LandingPage from "./LandingPage";
import LoginPage from "views/login/login-page.js";
import SignupPage from "views/sign-up/sign-up.js";

const Container = () => {
    const [userSession, setUserSession] = useState({
        user:{
            FirstName: "",
            LastName: "",
            Email: ""
        },
        state: {
            login: false,
            signup: false,
            registration: false,
            isLoggedIn: false
        },
        emailDetails : {
            name: '',
            emailAddress: '',
            message: '',
        },
        inProgress: {
            submitApplication: false
        }
    });

    const login = useApi({
        action: loginDetails => loginsApi.login(loginsBaseUrl, loginDetails),
        initialValue: [],
        defer: true,
        onSuccess: user => {
            if (user.FirstName == null) throw Error("Incorrect login details.");
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
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection." : e.message)
    },[]);

    const signup = useApi({
        action: signupDetails => loginsApi.signup(loginsBaseUrl, signupDetails),
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
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection." : e.message)
    }, []);

    const sendEmail = useApi({
        action: emailDetails => emailsApi.sendEmail(emailsBaseUrl, emailDetails),
        initialValue: [],
        defer: true,
        onSuccess: response => {
            var emailAddressInvalid = "Email Address Invalid!";
            if (response == emailAddressInvalid) throw Error(emailAddressInvalid);
            toast.success("Email sent successfully.");
            setUserSession({
                ...userSession,
                emailDetails : {
                    name: '',
                    emailAddress: '',
                    message: '',
                }
            });
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection." : e.message)
    }, []);
    
    const inProgress = login.inProgress || signup.inProgress || sendEmail.inProgress || userSession.inProgress.submitApplication;
    return (
        <Spinner
            isLoading={inProgress}
        >
        {userSession.state.login || userSession.state.signup 
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
                sendEmail={sendEmail.execute}
            />
        }
        </Spinner>
    );
};

export default Container;

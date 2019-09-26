import React from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

import { applicationForAdmissionApi } from "api";
import { applicationsBaseUrl } from "shared/constants/api-selectors";

import Registration from "./registration";

const Container = ({
    userSession,
    setUserSession
}) => {
    const submitApplication = useApi({
        action: applicationDetails => applicationForAdmissionApi.applicationForAdmission(applicationsBaseUrl, applicationDetails),
        initialValue: [],
        defer: true,
        onSuccess: results => {
            toast.success("Application submitted successfully.");
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection" : "Failed to submit application, try again.")
    },[]);
    
    return (
        <Registration
            userSession={userSession}
            setUserSession={setUserSession}
            submitApplication={submitApplication.execute}
        />
    );
};

export default Container;

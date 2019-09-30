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
        action: applicationDetails => {
            applicationForAdmissionApi.applicationForAdmission(applicationsBaseUrl, applicationDetails)
        },
        initialValue: [],
        defer: true,
        onSuccess: () => {
            toast.success("Application submitted successfully. FFSA Team will be in touch with you Soon.");
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Failed to submit application, please try again later." : e.message)
    },[]);
    
    return (
        <Registration
            userSession={userSession}
            setUserSession={setUserSession}
            submitApplication={submitApplication}
        />
    );
};

export default Container;

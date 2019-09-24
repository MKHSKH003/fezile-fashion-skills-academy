import React from "react";
import { toast } from "react-toastify";

import useApi from "shared/utils/react-use-api";

//import { loginApi } from "api";
//import { loginBaseUrl } from "shared/constants/api-selectors";

import StudentDetails from "./student-details";

const Container = ({
    user,
    studentDetails,
    setStudentDetails
}) => {
    const saveStudentDetails = useApi({
        action: studentDetails => console.log('Save:', studentDetails),//loginApi.login(loginBaseUrl, loginDetails),
        initialValue: [],
        defer: true,
        onSuccess: user => {
            toast.success("Students details saved.");
        },
        onError: e => toast.error(e.message == "Failed to fetch" ? "Poor internet connection" : "Failed to save student details.")
    },[]);
    
    return (
        <StudentDetails
            user={user}
            studentDetails={studentDetails}
            setStudentDetails={setStudentDetails}
            saveStudentDetails={saveStudentDetails.execute}
        />
    );
};

export default Container;

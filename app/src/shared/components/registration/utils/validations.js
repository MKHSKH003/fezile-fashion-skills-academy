import { toast } from "react-toastify";

export const applicationDetailsValidation = (
    applicationDetails,
    submitApplication
) => {
    if(applicationDetails.course.Id == '') {
        toast.error("Course not selected.");
        return false;
    }
    else if(applicationDetails.marketing.marketingMediaId == '') {
        toast.error("Marketing media not selected.");
        return false;
    }
    else if(applicationDetails.declaration.applicantDeclaration.IdorPassportNumber == '') {
        toast.error("Declaration details, ID / Passport not provided");
        return false;
    }
    else if(applicationDetails.declaration.benifactorDeclaration.idNumber == '') {
        toast.error("Declaration details, Benifactor ID number provided");
        return false;
    }
    
    submitApplication.execute(applicationDetails);

    return true
    
}


export default applicationDetailsValidation;

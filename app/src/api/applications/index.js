export const applicationForAdmission = (baseUrl, applicationDetails) =>
    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(applicationDetails),
        headers: {
            "Content-Type": "application/json"
        }
    });
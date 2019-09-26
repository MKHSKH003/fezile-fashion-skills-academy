export const applicationForAdmission = (baseUrl, applicationDetails) =>
    fetch(baseUrl + "authenticate-user", {
        method: "POST",
        body: JSON.stringify(applicationDetails),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());
export const sendEmail = (baseUrl, emailDetails) =>
    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(emailDetails),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());
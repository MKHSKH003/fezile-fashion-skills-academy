export const login = (baseUrl, userDetails) =>
    fetch(baseUrl + "authenticate-user", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());

export const signup = async (baseUrl, userDetails) =>
    fetch(baseUrl + "user-signup", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());

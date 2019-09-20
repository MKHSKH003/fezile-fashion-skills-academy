export const getUsers = baseUrl =>
    fetch(baseUrl)
        .then(response => response.json())
        .then(users => users);

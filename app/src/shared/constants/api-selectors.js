import appsettings from "app.json";

const baseUrl = appsettings.ApiRestWebServer[appsettings.Environment];

export const loginBaseUrl = baseUrl + "/api/logins/";
export const usersBaseUrl = baseUrl + "/api/users/";
export const applicationsBaseUrl = baseUrl + "/api/applications/";

import appsettings from "root/app.json";

const baseUrl = appsettings.ApiRestWebServer[appsettings.Environment];

export const loginBaseUrl = baseUrl + "/login/";
export const usersBaseUrl = baseUrl + "/users/";

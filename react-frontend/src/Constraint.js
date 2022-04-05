export const ROOT_PATH = "";
// export const ROOT_PATH = "https://duonglong26.github.io/profile";

export const API_ENPOINT = "http://localhost:9999";
// export const API_ENPOINT = "http://52.77.219.147:9999";
// export const API_ENPOINT = "";

export const HEADER = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
}
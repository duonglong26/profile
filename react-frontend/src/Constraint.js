export const ROOT_PATH = "";
// export const ROOT_PATH = "https://duonglong26.github.io/profile";

// export const API_ENPOINT = "http://localhost:9999";
// export const API_ENPOINT = "http://52.77.219.147:9999";
export const API_ENPOINT = "";

// export const BASEURL = "http://localhost:3000"

export const HEADER = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        // 'Access-Control-Allow-Origin': "*",
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
}
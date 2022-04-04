import axios from 'axios';
import { API_ENPOINT } from '../../../Constraint';
const API_PROFILE = API_ENPOINT + "/api/profile";

export const getProfileById = (id) => {
    return axios.get(API_PROFILE + "/" + id);
};

export const urlGetImage = (id) => {
    return API_ENPOINT + "/api/image/" + id + ".png";
}
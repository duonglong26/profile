import axios from 'axios';
import { API_ENPOINT, HEADER } from '../../../../Constraint';
const API_PROFILE = API_ENPOINT + "/api/profile";

export const getAllProfile = () => {
    return axios.get(API_PROFILE + "/all");
};

export const deleteProfileById = (id) => {
    return axios.delete(API_PROFILE + "/" + id, HEADER);
};

export const newProfile = (obj) => {
    return axios.post(API_PROFILE, obj, HEADER)
};

export const uploadImage = (data) => {
    return axios.post(API_ENPOINT + "/api/image", data, HEADER);
};

import axios from 'axios';
import { API_ENPOINT } from '../../../Constraint';
const PATH_LOGIN = API_ENPOINT + "/api/login";

export const login = (account) => {
    return axios.post(PATH_LOGIN, account, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
};
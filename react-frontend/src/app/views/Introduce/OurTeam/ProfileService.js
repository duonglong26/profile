export const getAllProfile = () => {
    let axios = require('axios');
    let config = {
        method: 'get',
        url: '/api/profile/all',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    };
    return axios(config);
};
export const getProfileById = (id) => {
    let axios = require('axios');
    let config = {
        method: 'get',
        url: '/api/profile/' + id,
        headers: {
        }
    };
    return axios(config);
};
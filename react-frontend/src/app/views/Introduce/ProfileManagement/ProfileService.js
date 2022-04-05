export const getAllProfile = () => {
    let axios = require('axios');
    let config = {
        method: 'get',
        url: '/api/profile/all',
        headers: {
            // 'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    };
    return axios(config);
};

export const deleteProfileById = (id) => {
    let axios = require('axios');
    let config = {
        method: 'delete',
        url: '/api/profile/' + id,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    };
    return axios(config);
};

export const newProfile = (obj) => {
    let axios = require('axios');
    let config = {
        method: 'post',
        url: '/api/profile',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        data: obj
    };
    return axios(config);
};

export const uploadImage = (file, idProfile) => {
    let axios = require('axios');
    let FormData = require('form-data');
    let fs = require('fs');
    let formdata = new FormData();
    formdata.append('file', file);
    formdata.append('idProfile', idProfile);
    let config = {
        method: 'post',
        url: '/api/image',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        data: formdata
    };
    return axios(config);
};

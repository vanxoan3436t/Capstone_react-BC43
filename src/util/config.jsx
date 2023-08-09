import axios from 'axios';
import { history } from '../index';
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const USER_LOGIN = 'userLogin';
export const PRODUCT = 'product'
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8RqPPK_ttr9NYitsWT7Cbe11nz4qye-QxZ_b8fk';

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});

export const TOKEN = 'accessToken';

export const httpSearch = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
export const { saveStorageJSON, getStorageJSON, clearStorage } = {
    saveStorageJSON: (name, data) => {
        const string = JSON.stringify(data);
        localStorage.setItem(name, string);
    },
    getStorageJSON: (name) => {
        if (localStorage.getItem(name)) {
            const data = JSON.parse(localStorage.getItem(name));
            return data;
        }
        return undefined;
    },
    clearStorage: (name) => {
        localStorage.removeItem(name)
    }
}

http.interceptors.request.use((config) => {
    //data (body): (lấy từ các input hoặc tham số từ phía client)
    config.headers = { ...config.headers }
    let token = getStorageJSON(USER_LOGIN)?.accessToken;// ? nếu không có thì trả null thì là chưa đăng nhập
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = TOKEN_CYBERSOFT;
    return config;

}, (err) => {
    return Promise.reject(err);
})

httpNonAuth.interceptors.request.use((config) => {
    config.baseURL = DOMAIN;
    config.headers = { ...config.headers }
    config.headers.tokenCybersoft = TOKEN_CYBERSOFT;

    return config
}, err => {
    return Promise.reject(err)
});
//Cấu hình cho response (Kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;
}, (err) => {
    //Xử lý lỗi cho api
    if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !');
        history.push('/login');
    }
    return Promise.reject(err)
});
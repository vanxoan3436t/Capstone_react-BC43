import axios from 'axios';



export const DOMAIN = 'https://shop.cyberlearn.vn';

export const http = axios.create({
    baseURL: DOMAIN, //domain của tất cả request
    timeout: 30000 //thời gian request tồn tại // đây là trong vòng 30000 = 5 phút ; hết thời gian thì sẽ out
});
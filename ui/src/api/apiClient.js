import axios from 'axios';

const baseURL = `http://192.168.10.70:8000`;

const token = localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

axiosClient.interceptors.response.use(
    function (response){
        return response;
    },
    function (error) {
        let res = error.response;
        if(res.status === 401){
            window.location.href = "/"
        }
        console.error("Looks there was a problem. Status Code: " + res.status);
        return Promise.reject(error);
    }
)

export default axiosClient
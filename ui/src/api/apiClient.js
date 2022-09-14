import axios from 'axios';

const baseURL = `http://192.168.10.70:8000`;

const token = localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${token}`
    }
    
});

//axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axiosClient.interceptors.response.use(
    function (response){
        return response;
    },
    function (error) {
        let res = error.response;
        // if(res.status === 401){
        //     window.location.href = "/login"
        // }
        console.error("Looks there was a problem. Status Code: " + res);
        if(res?.status === 401){
           window.location.reload();
        } else if (res?.code === "ECONNABORTED"){
            console.log("Timeout hatası", res)
            window.location.href = "/login"
        }
        else {
            window.location.href = "/login"
        }
        return Promise.reject(error);
    }
)

export default axiosClient
import axios from 'axios';

export const setAuthToken = token => {
    if(token){
        console.log("Authorization yapıldı")
        console.log(axios.defaults.headers)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export default setAuthToken;
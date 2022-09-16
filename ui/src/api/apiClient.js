import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const baseURL = `http://192.168.10.70:8000`;

const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-type": "application/json"
  },
});

//axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const dispatch = useDispatch();
    const refresh = useSelector(state => state.token.refresh)
    let res = error.response;
    //const refresh = localStorage.getItem("refresh");
    // if(res.status === 401){
    //     window.location.href = "/login"
    // }
      console.error("Looks there was a problem. Status Code: " + res);
      console.log(res)
      if (res?.status === 401) {
        
        axios.post(`${baseURL}/token/refresh`, {refresh: refresh})
        .then(response => {
          //alert("Başarılı")
          alert("401 yedik, refresh: ", refresh)

          //window.location.href = "/"
        })
      } else if (res?.code === "ECONNABORTED") {
        console.log("Timeout hatası", res);
        //window.location.href = "/login";
      } else {
        //window.location.href = "/login";
      }
      return Promise.reject(error);
  }
);

export default axiosClient;

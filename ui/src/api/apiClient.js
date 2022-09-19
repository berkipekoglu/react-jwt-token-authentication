import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../helpers/setAuthToken";

const baseURL = `http://192.168.10.70:8000`;

const token = localStorage.getItem("token");

// Default config options
const defaultOptions = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(defaultOptions);

axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// Set the AUTH token for any request
axiosClient.interceptors.request.use(function (config) {
  console.log("AXIS GİRİLDİ")
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axiosClient.interceptors.response.use(
  function (response) {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return response;
  },
  function (error) {
    // const dispatch = useDispatch();
    // const refresh = useSelector(state => state.token.refresh)
    let res = error.response;
    //const refresh = localStorage.getItem("refresh");
    // if(res.status === 401){
    //     window.location.href = "/login"
    // }
    console.error("Looks there was a problem. Status Code: " + res);
    console.log(res);
    if (res?.status === 401) {
      console.log("401 error");
      // axios.post(`${baseURL}/token/refresh`, {refresh: refresh})
      // .then(response => {
      //   //alert("Başarılı")
      //   alert("401 yedik, refresh: ", refresh)

      //   //window.location.href = "/"
      // })
      //setAuthToken(localStorage.getItem("token"));
      window.location.href = "/login"
    } else if (res?.code === "ECONNABORTED") {
      console.log("Timeout hatası", res);
      //window.location.href = "/login";
    } else {
      console.log("other error");
      //window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

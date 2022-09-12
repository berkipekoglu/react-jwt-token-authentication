import setAuthToken from "../../helpers/setAuthToken";
import axiosClient from "../apiClient";

export function refresh(token) {
  return axiosClient.post(`/token/refresh`, { refresh: `${token}` });
}

export function getToken(params){
  return axiosClient.post('/token', params).then(resp => tokenRegister(resp.data))
}

function tokenRegister(params){
  localStorage.setItem("token", params.access);
  localStorage.setItem("refresh", params.refresh);
  setAuthToken(params.access)
}
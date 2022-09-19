import axiosClient from "../apiClient";

export function postLogo(params){
    return axiosClient.post('/logoapi', params)
}
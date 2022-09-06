import axiosClient from "../apiClient";

export function postLogo(){
    return axiosClient.post('/logoapi')
}
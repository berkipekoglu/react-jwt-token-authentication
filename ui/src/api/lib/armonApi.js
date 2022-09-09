import axiosClient from "../apiClient";

export function postArmon(params){
    return axiosClient.post("/armonapi", params);
}

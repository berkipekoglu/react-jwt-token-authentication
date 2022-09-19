import axiosClient from "../apiClient";

export function getLogs(){
    return axiosClient.get("/logerrors");
}
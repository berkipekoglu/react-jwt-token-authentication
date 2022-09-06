import axiosClient from "../apiClient";

export function getUsers(){
    return axiosClient.get('/users');
}

export function postUser(params){
    return axiosClient.post('/users', JSON.stringify(params));
}

export function getUser(params){
    return axiosClient.get(`/users/${params.id}`, JSON.stringify(params));
}

export function putUser(params){
    return axiosClient.put(`/users/${params.id}`, JSON.stringify(params));
}

export function deleteUser(params){
    return axiosClient.delete(`/users/${params.id}`);
}
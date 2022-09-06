import axiosClient from "../apiClient";

export function getOrganization(){
    return axiosClient.get('/organization')
}

export function postOrganization(params){
    return axiosClient.post('/organization', JSON.stringify(params))
}

export function getSingleOrganization(params){
    return axiosClient.get(`/organization/${params.id}`)
}

export function putSingleOrganization(params){
    return axiosClient.put(`/organization/${params.id}`, JSON.stringify(params))
}

export function deleteSingleOrganization(params){
    return axiosClient.delete(`/organization/${params.id}`, JSON.stringify(params))
}
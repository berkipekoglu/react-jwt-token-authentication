import axiosClient from "../apiClient";

export function refresh(token) {
  return axiosClient.post(`/token/refresh`, { refresh: token });
}

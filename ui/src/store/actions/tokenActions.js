import React from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../config";
import { AXIOS_TOKEN_API } from "../types/tokenActionTypes";
import { useSelector } from 'react-redux';


export const Axios_token_api = (username, password) => {
    //const navigate = useNavigate();
    const get_user = useSelector(state => state.token)
    return (dispatch) => {
        
        console.log("çalıştı");
        const loginPayload = {
          username: username, //"eve.holt@reqres.in",
          password: password //"cityslicka",
        };
    console.log("bakalım burası çalıştı mı")
        axios
          .post(api_url, loginPayload)
          .then((response) => {
            toast.success("Giriş yapıldı, yönlendiriliyorsunuz..");
            // get token from response
            const token = response.data.access;
            const refresh = response.data.refresh;

            dispatch({
                type: AXIOS_TOKEN_API,
                payload: {
                    token: token,
                    username: username,
                    password: password
                }
            })

            console.log(get_user)
    
            //const decoded = jwt_decode(token)
            //console.log("DECODED : ",decoded)
    
            // set JWT token to local
            //localStorage.setItem("token", token);
            //localStorage.setItem("refresh", refresh)
            // set token to axios common header
            //setAuthToken(token);
    
            // redirect user to home page
            
            setTimeout(() => {
              //navigate("/", { replace: true});
            }, 1500)
          })
          .catch((err) => {
            toast.error("Lütfen giriş bilgilerinizi kontrol ediniz.");
            console.log("--->",err)
          });
    }
}
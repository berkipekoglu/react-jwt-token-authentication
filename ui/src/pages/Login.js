import React, { useState } from "react";
import axios from "axios";
import setAuthToken from "../helpers/setAuthToken";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import InputGroup from "../components/FormFields/InputGroup";
import Button from "../components/FormFields/Button";
import jwt_decode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  //const [token, setToken] = useState("xx");
  const dispatch = useDispatch();
  const myToken = useSelector((state) => state.token.token);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({ username: "", password: "" });
  const { username, password } = inputValue;
  const [formError, setFormError] = useState(false)

  const formHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleSubmit = (username, password) => {
    //reqres registered sample user
    
    console.log("çalıştı");
    const loginPayload = {
      username: username, //"eve.holt@reqres.in",
      password: password //"cityslicka",
    };

    const ip = "http://192.168.10.70:8000/token"

    axios
      .post(ip, loginPayload)
      .then((response) => {
        toast.success("Giriş yapıldı, yönlendiriliyorsunuz..");
        // get token from response
        const token = response.data.access;
        const refresh = response.data.refresh;

        const decoded = jwt_decode(token)
        //console.log("DECODED : ",decoded)

        dispatch({
          type: "login",
          payload: token,
        });

        // set JWT token to local
        localStorage.setItem("token", token);
        localStorage.setItem("refresh", refresh)
        // set token to axios common header
        setAuthToken(token);

        // redirect user to home page
        
        setTimeout(() => {
          navigate("/", { replace: true});
        }, 1500)
      })
      .catch((err) => {
        toast.error("Lütfen giriş bilgilerinizi kontrol ediniz.");
        console.log("--->",err)
      });
  };

  function login(){
    HandleSubmit(username, password)
  }

  return (
    <div className="min-h-full w-full flex justify-center items-center">
      {/* <button onClick={() => HandleSubmit()}>Token Al</button> */}
      {/* <InputField /> */}
      <div className="bg-neutral-50 shadow-inner w-2/5 max-w-md min-w-max h-96 max-h-max rounded flex justify-center items-center">
        <div className="w-full flex flex-col mx-10 gap-y-5">
          <h3 className="text-3xl font-bold mb-4 text-indigo-600">Giriş</h3>
          <InputGroup
            label={{ text: "Kullanıcı Adı" }}
            input={{
              type: "input",
              placeholder: "",
              onChange: formHandler,
              name: "username",
              //error: formError
            }}
          />
          <InputGroup
            label={{ text: "Şifre" }}
            input={{
              type: "password",
              placeholder: "",
              onChange: formHandler,
              name: "password",
              //error: formError
            }}
          />
          <Button title="Giriş Yap" buttonType="GradientPurpleToPink" onClick={() => login()} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

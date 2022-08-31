import React from "react";
import axios from "axios";
import setAuthToken from "../helpers/setAuthToken";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //const [token, setToken] = useState("xx");
  const dispatch = useDispatch();
  const myToken = useSelector((state) => state.token.token);
  const navigate = useNavigate();

  const HandleSubmit = (email, pass) => {
    //reqres registered sample user
    console.log("çalıştı");
    const loginPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    axios
      .post("https://reqres.in/api/login", loginPayload)
      .then((response) => {
        // get token from response
        const token = response.data.token;
        //setToken(response.data.token);
        dispatch({
          type: "login",
          payload: token,
        });
        console.log(response.data.token);
        // set JWT token to local
        localStorage.setItem("token", token);

        // set token to axios common header
        setAuthToken(token);

        // redirect user to home page
        navigate("/");
      })
      .catch((err) => console.log(err));
    console.log("MYTOKEN : ", myToken);
  };

  return (
    <div className="bg-gray-800 min-h-full w-full">
      {/* <button onClick={() => HandleSubmit()}>Token Al</button> */}
asdads
     </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers, postUser, putUser } from "../api/lib/usersApi";
import BasicTable from "../components/DataTables/BasicTable";
import Spinner from "../components/Spinner";

function Users() {
  const [data, setData] = useState([]);
  const stateData = useSelector(state => state.data.data)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(stateData)
    getUsers()
      .then((response) => {
        // dispatch({
        //   type: 'data',
        //   payload: response.data
        // })
        setData(response.data)
      })
      .catch((error) => {
        console.log("HATA: ", error);
        toast.error("Bağlantıda bir hata meydana geldi.", {
          duration: 4000,
        });
      })
  }, []);

  // useEffect(() => {
  //   setData([stateData])
  //   navigate("/users", {
  //     replace: true,
  //     state: stateData
  //   })
    
  // }, [stateData, dispatch])

  return (
    <div className="w-full">
      {/* Data Table */}

      {data.length > 0 ? (
        <BasicTable
          columns={[
            { type: "id", name: "ID" },
            { type: "username", name: "Kullanıcı Adı" },
            { type: "first_name", name: "Adı" },
            { type: "last_name", name: "Soyadı" },
            { type: "email", name: "E-posta" },
            { type: "actions", name: "" },
          ]}
          rows={data}
          addModal={[
            {
              type: "text",
              name: "Kullanıcı Adı",
              key: "username",
            },
            {
              type: "text",
              name: "Adı",
              key: "first_name",
            },
            {
              type: "text",
              name: "Soyadı",
              key: "last_name",
            },
            {
              type: "email",
              name: "E-posta adresi",
              key: "email",
            },
            {
              type: "password",
              name: "Parola",
              key: "password",
            },
            {
              type: "checkbox",
              name: "Etkin",
              key: "is_active",
            },
          ]}
          editModal={[
            {
              type: "text",
              name: "Kullanıcı Adı",
              key: "username",
            },
            {
              type: "text",
              name: "Adı",
              key: "first_name",
            },
            {
              type: "text",
              name: "Soyadı",
              key: "last_name",
            },
            {
              type: "email",
              name: "E-posta adresi",
              key: "email",
            },
            {
              type: "password",
              name: "Parola",
              key: "password",
            },
            {
              type: "checkbox",
              name: "Etkin",
              key: "is_active",
            },
          ]}
          updateFunc={putUser}
          addFunc={postUser}
          deleteFunc={deleteUser}
          getFunc={getUsers}
        />
      ) : (
        <Spinner />
      )}
      <Toaster />
    </div>
  );
}

export default Users;

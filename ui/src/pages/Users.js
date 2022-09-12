import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  deleteSingleOrganization,
  getOrganization,
  postOrganization,
  putSingleOrganization,
} from "../api/lib/organizationApi";
import { deleteUser, getUsers, postUser, putUser } from "../api/lib/usersApi";
import BasicTable from "../components/DataTables/BasicTable";
import Spinner from "../components/Spinner";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        //console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("HATA: ", error);
        toast.error("Bağlantıda bir hata meydana geldi.", {
          duration: Infinity,
        });
      });
  }, []);

  return (
    <div className="w-full">
      {/* Data Table */}

      {data.length > 0 ? (
        <BasicTable
          columns={[
            { type: "id", name: "ID" },
            { type: "first_name", name: "Adı" },
            { type: "last_name", name: "Soyadı" },
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
              type: "checkbox",
              name: "Etkin",
              key: "is_active",
            },
            {
              type: "password",
              name: "Parola",
              key: "password",
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
              type: "checkbox",
              name: "Etkin",
              key: "is_active",
            },
          ]}
          updateFunc={putUser}
          addFunc={postUser}
          deleteFunc={deleteUser}
        />
      ) : (
        <Spinner />
      )}
      <Toaster />
    </div>
  );
}

export default Users;

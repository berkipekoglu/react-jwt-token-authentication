import React, { useEffect, useState, Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  deleteSingleOrganization,
  getOrganization,
  postOrganization,
  putSingleOrganization,
} from "../api/lib/organizationApi";
import BasicTable from "../components/DataTables/BasicTable";
import Spinner from "../components/Spinner";

function Organization() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrganization()
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
            { type: "organization_name", name: "Organizasyon Adı" },
            { type: "description", name: "Açıklama" },
            { type: "username", name: "Kullanıcı" },
            { type: "organization_id", name: "Organizasyon ID" },
            { type: "user_id", name: "Kullanıcı ID" },
            { type: "actions", name: "" },
          ]}
          rows={data}
          addModal={[
            {
              type: "text",
              name: "Organizasyon Adı",
              key: "organization_name",
            },
            {
              type: "text",
              name: "Kullanıcı",
              key: "username",
            },
            {
              type: "text",
              name: "Organizasyon ID",
              key: "organization_id",
            },
            {
              type: "number",
              name: "Kullanıcı ID",
              key: "user_id",
            },
            {
              type: "password",
              name: "Kullanıcı Şifresi",
              key: "password",
            },
            {
              type: "description",
              name: "Açıklama",
              key: "description",
            },
          ]}
          editModal={[
            {
              type: "text",
              name: "Organizasyon Adı",
              key: "organization_name",
            },
            {
              type: "text",
              name: "Kullanıcı",
              key: "username",
            },
            {
              type: "text",
              name: "Organizasyon ID",
              key: "organization_id",
            },
            {
              type: "number",
              name: "Kullanıcı ID",
              key: "user_id",
            },
            {
              type: "password",
              name: "Kullanıcı Şifresi",
              key: "password",
            },
            {
              type: "description",
              name: "Açıklama",
              key: "description",
            },
          ]}
          updateFunc={putSingleOrganization}
          addFunc={postOrganization}
          deleteFunc={deleteSingleOrganization}
        />
      ) : (
        <Spinner />
      )}
      <Toaster />
    </div>
  );
}

export default Organization;

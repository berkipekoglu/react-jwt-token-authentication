import React, { useEffect, useState, Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getOrganization } from "../api/lib/organizationApi";
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
        />
      ) : (
        <Spinner />
      )}
      <Toaster />
    </div>
  );
}

export default Organization;

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getLogs } from "../api/lib/logApi";
import BasicTable from "../components/DataTables/BasicTable";
import Spinner from "../components/Spinner";

function Logs() {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(
  <div className="flex w-full h-full justify-center items-start text-2xl font-bold text-gray-900 pt-10">Log kaydı bulunamadı.</div>
  );

  useEffect(() => {
    getLogs()
      .then((response) => {
        console.log(response);
        setData(response.data);

        //console.log(response.data);
      })
      .catch((error) => {
        console.log("HATA: ", error);
        toast.error("Bağlantıda bir hata meydana geldi.", {
          duration: 4000,
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
            { type: "logs", name: "LOG" },
            { type: "actions", name: "" },
          ]}
          rows={data}
          t // addModal={[
          //   {
          //     type: "text",
          //     name: "Loglar",
          //     key: "logs",
          //   },
          // ]}
          // editModal={[

          // ]}
          // updateFunc={putSingleOrganization}
          // addFunc={postOrganization}
          // deleteFunc={deleteSingleOrganization}
        />
      ) : data.length === 0 ? (
        noData
      ) : (
        <Spinner />
      )}
      <Toaster />
    </div>
  );
}

export default Logs;

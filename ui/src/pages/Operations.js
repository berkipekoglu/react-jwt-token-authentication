import React, { useEffect, useState } from "react";
import Button from "../components/FormFields/Button";
//import DatePicker from "../components/FormFields/DatePicker";
import { postArmon } from "../api/lib/armonApi";
import { DatePicker, Space } from "antd";
import "../components/FormFields/DatePicker.css";
import toast, { Toaster } from "react-hot-toast";
import "moment/locale/tr";
import moment from "moment";
import locale from "antd/es/date-picker/locale/tr_TR";

function Operations() {
  const [loading, setLoading] = useState(true);
  let toastID;
  const [dates, setDates] = useState({
    start_date: null,
  });

  useEffect(() => {
    console.log(dates);
  }, [dates]);


  function get_postArmon() {
    setLoading(true);
    const params = {
      start_date: dates.start_date,
    };

    if (loading) {
      console.log("girdi")
      toastID = toast.loading("Veriler kontrol ediliyor..");
    }

    postArmon(params)
      .then((response) => {
        if (response?.data.data === false) {
          //setLoading(true);
          toast.error("Belirtilen tarihte veri bulunamadı.");
        } else {
          toast.success("Veriler hazırlandı, LOGO'ya aktarım için hazır.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        toast.dismiss(toastID);
      });
  }

  const onChange = (date, dateString) => {
    setDates({
      start_date: dateString + "-01",
    });
    console.log("Seçilen: ", dates);
  };

  return (
    <div className="flex w-full justify-center items-center mb-56 ">
      <Space direction="vertical" size={12}>
        <DatePicker
          autoFocus={true}
          format="YYYY-MM"
          onChange={onChange}
          placeholder={"Tarih seçiniz.."}
          picker="month"
          locale={locale}
        />
      </Space>

      <div className="ml-2 py-4 ">
        <Button
          buttonType="GradientPinkToOrange"
          title="Gönder"
          styleClass="h-14 mt-2"
          onClick={() => get_postArmon()}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default Operations;

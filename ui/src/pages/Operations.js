import React, { useEffect, useState } from "react";
import Button from "../components/FormFields/Button";
//import DatePicker from "../components/FormFields/DatePicker";
import { postArmon } from "../api/lib/armonApi";
import { ConfigProvider, DatePicker, Space } from "antd";
import "../components/FormFields/DatePicker.css";
import toast, { Toaster } from "react-hot-toast";
import locale from 'antd/es/locale/tr_TR';


function Operations() {
  const [dates, setDates] = useState({
    start_date: null,
    end_date: null,
  });

  useEffect(() => {
    console.log(dates);
  }, [dates]);

  function get_postArmon() {
    const params = {
      start_date: dates.start_date,
      end_date: dates.end_date,
    };

    postArmon(params)
      .then((response) => {
        if (response?.data.data === false) {
          toast.error("İki tarih arasında veri bulunamadı.");
        } else {
          toast.success("Veriler hazırlandı, LOGO'ya aktarım için hazır.");
        }
      })
      .catch((error) => {
        console.log("HATA MEYDANA GELDİ");
      })
      .finally(() => {
        console.log("Başarılı");
      });
  }

  const onChange = (date, dateString) => {
    setDates({
      start_date: dateString[0],
      end_date: dateString[1],
    });
  };

  return (
    <div className="flex w-full justify-center items-center mb-56 ">
        <Space direction="vertical" size={12}>
          <DatePicker
            autoFocus={true}
            format="YYYY-MM-DD"
            onChange={onChange}
            placeholder={"Tarih seçiniz.."}
            picker="month"
            locale={{"Jan": "Ocak", "Jannuary": "Ocak2"}}
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

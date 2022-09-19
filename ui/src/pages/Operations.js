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
import { postLogo } from "../api/lib/logoApi";

function Operations() {
  const [loading, setLoading] = useState(true);
  const [transfer, setTransfer] = useState(false);
  const [disableArmon, setDisableArmon] = useState(false);
  const [disableLogo, setDisableLogo] = useState(false);
  const [disableDate, setDisableDate] = useState(false);
  let toastID;

  const [dates, setDates] = useState({
    start_date: null,
  });

  useEffect(() => {
    console.log(dates);
  }, [dates]);

  function get_postArmon() {
    setLoading(true);
    setDisableArmon(true);
    setDisableDate(true)

    const params = {
      start_date: dates.start_date,
    };

    if (loading) {
      toastID = toast.loading("Veriler kontrol ediliyor..");
    }

    postArmon(params)
      .then((response) => {
        if (response?.data.data === false) {
          //setLoading(true);
          toast.error("Belirtilen tarihte veri bulunamadı.");
          setDisableDate(false)
        } else {
          toast.success("Veriler hazırlandı, LOGO'ya aktarım için hazır.");
        }

        if(response?.data.message === 'Success'){
          setTransfer(true)
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        toast.dismiss(toastID);
        setDisableArmon(false)
      });
  }

  function get_postLogo(){
    setLoading(true);
    setDisableLogo(true);

    const params = {
      start_date: dates.start_date
    };

    if (loading) {
      toastID = toast.loading("Logo'ya aktarım yapılıyor..", {
        style: {
          background: '#9C3D54',
          color: '#EEEEEE'
        }
      });
    }

    postLogo(params)
    .then(response => {
      toast.success("Logo'ya aktarım başarıyla tamamlandı.")
    })
    .catch((error) => {
      toast.error(error.message);
    })
    .finally(() => {
      toast.dismiss(toastID);
      setDisableArmon(false)
      setDisableLogo(false)
      setTransfer(false)
      setDisableDate(false)
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
          disabled={disableDate}
        />
      </Space>

      <div className="ml-2 py-4 flex">
        {!transfer ? (
          <Button
            buttonType="GradientPinkToOrange"
            title="Gönder"
            styleClass="h-14 mt-2"
            onClick={() => get_postArmon()}
            disabled={disableArmon}
          />
        ) : (
          <Button
            buttonType="GradientGreenToBlue"
            title="Logo'ya Aktar"
            styleClass="h-14 mt-2"
            disabled={disableLogo}
            onClick={() => get_postLogo()}
          />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default Operations;

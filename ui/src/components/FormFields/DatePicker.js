import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import "./DatePicker.css";
import { useDispatch, useSelector } from "react-redux";
const { RangePicker } = DatePicker;



function Datepicker({ _onChange, placeholder}) {
  const [date, setDate] = useState('');
  const _date = useSelector(state => state)
  const dispatch = useDispatch()
  let start_date, end_date;

  useEffect(() => {
    dispatcher();
    console.log(_date)
    dispatch({
      type: 'armonapi',
      payload: {
        start_date: start_date,
        end_date: end_date
      }

    })

    dispatch({
      type: "end_date",
      payload: end_date

    })

    dispatch({
      type: "start_date",
      payload: start_date

    })
  },[start_date, end_date])

  const dispatcher = () => {
    dispatch({
      type: 'armonapi',
      payload: {
        start_date: start_date,
        end_date: end_date
      }

    })

    dispatch({
      type: "end_date",
      payload: end_date

    })

    dispatch({
      type: "start_date",
      payload: start_date

    })
  }

  const onChange = (value, dateString) => {
    console.log("Formatted Selected Time: ", dateString);
    return dateString
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker.RangePicker
        autoFocus={true}
        format="YYYY-MM-DD"
        onChange={onChange}
        placeholder={["Başlangıç tarihi", "Bitiş tarihi"]}
      />
    </Space>
  );
}

export default Datepicker;

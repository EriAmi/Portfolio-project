import React, { useEffect, useState } from "react";

import moment from "moment";
import axios from "axios";
import { getWeatherForecast } from "../lib/client/callAPI";

export default function WeatherCalendar() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e: React.SetStateAction<Date>) => {
    setDateState(e);
  };

  useEffect(() => {
    //räkna ut hur många dagar i framtiden
  }, [dateState]);

  const getWeather = async () => {
    const city = "london";
    const asd = await getWeatherForecast(city);
    console.log(asd);
  };
  return (
    <div className="justify-center">
      <p>
        Current date is <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
      <div className="rounded-xl outline outline-slate-600 text-center w-fit p-1 m-1 " onClick={getWeather}>
        Weather today
      </div>
      <button onClick={getWeather}>Weather tomorrow</button>
      <button onClick={getWeather}>Weather the day after tomorrow</button>
    </div>
  );
}

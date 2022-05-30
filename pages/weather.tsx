import type { NextPage } from "next";
import Login from "../components/Login";
import WeatherCalendar from "../components/WeatherCalendar";

const Home: NextPage = () => {
  return (
    <div>
      <WeatherCalendar />
    </div>
  );
};

export default Home;

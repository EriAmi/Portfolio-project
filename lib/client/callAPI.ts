import axios from "axios";
import IProject from "../../interfaces/IProject";
import IUserCredentials from "../../interfaces/IUserCredentials";

export const createUser = async (userCredentials: IUserCredentials) => {
  await axios.post<IUserCredentials>("/api/register", userCredentials);
};

export const login = async (userCredentials: IUserCredentials): Promise<string> => {
  const { data } = await axios.post<string>("api/login", userCredentials);
  return data;
};

export const getProjects = async (): Promise<IProject[]> => {
  const { data } = await axios.get<IProject[]>("api/projects");
  return data;
};

export const getScreenshot = async (url: string): Promise<string> => {
  const { data } = await axios.post<string>("api/screenshot", { url: url });
  return data;
};

export const getWeatherForecast = async (city: string): Promise<string> => {
  const { data } = await axios.get<string>(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );
  return data;
};

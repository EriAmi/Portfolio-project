import React, { useState } from "react";
import IUserCredentials from "../interfaces/IUserCredentials";
import { login } from "../lib/client/callAPI";
import cookies from "js-cookie";
export default function Login() {
  const [form, setForm] = useState<IUserCredentials>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (userCredentials: IUserCredentials) => {
    try {
      const token = await login(userCredentials);

      if (token) cookies.set("authToken", token, { expires: 200, sameSite: "strict" });
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2x1 mt-4">
        Login
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(form);
          }}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />

          <button
            type="submit"
            className="bg-blue-500 text-slate-100 rounded-md p-1 shadow-sm shadow-black hover:border-solid"
          >
            Login now
          </button>
        </form>
      </h1>
    </div>
  );
}

import React, { useState } from "react";
import IUserCredentials from "../interfaces/IUserCredentials";
import { createUser } from "../lib/client/callAPI";

export default function Register() {
  const [form, setForm] = useState<IUserCredentials>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (userCredentials: IUserCredentials) => {
    try {
      createUser(userCredentials);
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2x1 mt-4">
        Sign up
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <textarea
            placeholder="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border-2 rounded border-gray-600 p-1 "
          />
          <button type="submit" className="bg-blue-500 text-white rounded p-1">
            {" "}
            Sign up
          </button>
        </form>
      </h1>
    </div>
  );
}

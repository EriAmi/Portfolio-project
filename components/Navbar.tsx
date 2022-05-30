import React from "react";
import Logout from "./Logout";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-500 to-violet-900  items-center py-4">
      <div className="col-span-1" />
      <Logout />
      <div className="col-span-1 flex justify-center">
        <NavbarButton href={"/"} text={"Home"} />
      </div>
      <div className="col-span-1 flex justify-end ">
        <NavbarButton href={"/register"} text={"Register"} /> <NavbarButton href={"/login"} text={"Login"} />
      </div>
    </div>
  );
}

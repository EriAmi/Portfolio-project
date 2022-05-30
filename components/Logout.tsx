import React from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
export default function Logout() {
  const logout = () => {
    Cookies.remove("authToken");
  };

  return (
    <Link href="/">
      <button onClick={logout} className="pr-4">
        <MdLogout className="text-white" />
      </button>
    </Link>
  );
}

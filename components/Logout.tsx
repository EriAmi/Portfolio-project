import React from "react";
import Cookies from "js-cookie";
import Link from "next/link";
export default function Logout() {
  const logout = () => {
    Cookies.remove("authToken");
  };

  return (
    <Link href="/">
      <button onClick={logout}>Logout</button>
    </Link>
  );
}

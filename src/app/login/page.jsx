import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-56 bg-slate-100">
      <h1 className="text-heading">
        Please{" "}
        <Link
          target="_blank"
          href={"http://localhost:5173/login"}
          className="text-blue-700 underline"
        >
          click here
        </Link>{" "}
        to login admin dashboard
      </h1>
    </div>
  );
};
export default Login;

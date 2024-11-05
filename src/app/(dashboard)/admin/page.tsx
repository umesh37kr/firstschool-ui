import UserCard from "@/components/dashboard/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        {/* users card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="students" />
          <UserCard type="staffs" />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default Admin;

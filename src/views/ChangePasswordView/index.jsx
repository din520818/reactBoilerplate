import React from "react";
import ChangePassword from "@Components/ChangePassword";
import Sidebar from "@Components/Sidebar/index";

const ChangePasswordView = () => {
  return (
    <div className="dnestw-flex dnestw-bg-[#EB572F] ">
      <div className="dnestw-w-[20%]">
        <Sidebar />
      </div>
      <div className="dnestw-w-[100%]">
        <ChangePassword />
      </div>
    </div>
  );
};

export default ChangePasswordView;

import React from "react";
import Menu from "@Components/Menu/Menu";
import Sidebar from "@Components/Sidebar/index";

const MenuView = () => {
  return (
    <div className="dnestw-flex dnestw-bg-[#EB572F]">
      <div className="dnestw-w-[20%]">
        <Sidebar />
      </div>
      <div className="  dnestw-w-[100%]">
        <Menu />
      </div>
    </div>
  );
};

export default MenuView;

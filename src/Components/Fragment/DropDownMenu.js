import React from "react";
import "../../../src/App.css";
import DropDownSubMenu from "./DropDownSubMenu";

const DropDownMenu = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a
          href={eval("javascript:void(0)")}
          class="closebtn"
          onClick={closeNav}
        >
          &times;
        </a>
        <DropDownSubMenu />
      </div>
      <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
};

export default DropDownMenu;

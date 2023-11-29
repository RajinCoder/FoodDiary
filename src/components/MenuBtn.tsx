import React from "react";
import menu from "../assets/menu-icon.png";

interface Props {
  onClick: () => void;
}
const MenuBtn = ({ onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        id="menuBtn"
        className="btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <img id="menuIcon" src={menu} alt="menu" />
      </button>
    </>
  );
};

export default MenuBtn;

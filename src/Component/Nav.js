import React from "react";
import { Link ,useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const navMenuList = ["Gallery", "Wishlist", "About"];
  return (
    <div>
      <div className="Navigation-bar px-5 py-2 m-0 d-flex justify-content-between align-items-center">
        <div className="Nav-logo" onClick={()=>navigate('/')}>
          <img className="" src={require("../Assets/images/amit-3.jpg")} />
        </div>
        <div className="Nav-menu">
          <ul className="d-flex m-0">
            {navMenuList.map((list, id) => {
              return (
                <li key={id}>
                  <Link to={list}>{list}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

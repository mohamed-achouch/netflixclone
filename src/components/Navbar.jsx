import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex items-center justify-between p-4 absolute z-[100]">
      <Link to="/">
        <h1 className=" text-red-600 font-bold cursor-pointer text-4xl">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className=" text-white pr-4">Acount</button>
          </Link>

          <button
            onClick={handleLogout}
            className=" rounded cursor-pointer bg-red-600 px-6 py-2 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className=" text-white pr-4">Sing In</button>
          </Link>
          <Link to="/register">
            <button className=" rounded cursor-pointer bg-red-600 px-6 py-2 text-white">
              Sing Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

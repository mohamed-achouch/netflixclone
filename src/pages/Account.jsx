import React from "react";
import { UserAuth } from "../context/AuthContext";
import SaveShows from "../components/SaveShows";

const Account = () => {
  const { user } = UserAuth();

  return (
    <>
      <div className=" w-full text-white">
        <img
          className=" w-full h-[400px]  object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/dd386464-08ce-4576-9089-67845bfd38e1/MA-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full"></div>
        <div className=" absolute top-[20%] p-4 md:p-4">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SaveShows/>
    </>
  );
};

export default Account;

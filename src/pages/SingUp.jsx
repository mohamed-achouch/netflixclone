import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [hide, setHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, singUp } = UserAuth();
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await singUp(email, password);
      navigate('/')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className=" w-full h-full">
      <img
        className=" absolute hidden sm:block w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/dd386464-08ce-4576-9089-67845bfd38e1/MA-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 h-screen w-full rounded-md"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className=" w-full h-full px-4 sm:max-w-[450px] sm:h-[600px] mx-1  sm:mx-auto bg-black/75 text-white">
          <div className="w-full h-full sm:max-w-[320px] mx-auto py-16 ">
            <h1 className=" font-bold text-3xl">Sing Up</h1>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col py-4 w-full"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
                className=" py-2 pl-4 border-none outline-none bg-gray-800 rounded-sm mt-6"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className=" py-2 pl-4 border-none outline-none bg-gray-800 rounded-sm mt-6"
              />
              <button className=" w-full font-bold my-6 bg-red-800 p-2 rounded-sm">
                {" "}
                Sing Up
              </button>
            </form>
            <div className=" flex justify-between items-center w-full text-gray-600">
              <div className=" flex items-center gap-2">
                <input type="checkbox" className=" text-gray-600" /> Remember Me
              </div>
              <Link to="/" className="hover:underline">
                Need help?
              </Link>
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-1 mt-3">
                {" "}
                <p className=" text-gray-600">New to Netflix?</p>{" "}
                <Link to="/login">Sing In</Link>
              </div>
              <div className=" flex gap-2 flex-col">
                <p className=" text-1xl text-gray-600">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot
                </p>
                {hide ? (
                  <Link
                    onClick={() => setHide(false)}
                    className="text-blue-600"
                  >
                    {" "}
                    Learn more.
                  </Link>
                ) : (
                  <p className=" text-gray-600 text-sm">
                    The information collected by Google reCAPTCHA is subject to
                    the Google Privacy Policy and Terms of Service, and is used
                    for providing, maintaining, and improving the reCAPTCHA
                    service and for general security purposes (it is not used
                    for personalized advertising by Google)...{" "}
                    <Link
                      onClick={() => setHide(true)}
                      className="text-blue-600"
                    >
                      {" "}
                      Less
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;

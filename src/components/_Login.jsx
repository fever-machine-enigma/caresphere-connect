import splashLoginImage from "../assets/loginSplash.jpg";
import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";
import _Register from "./_Register";

import { useState } from "react";
const _Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkMode = prefersDarkMode ? logoDark : logoLight;

  return (
    <main className="bg-bgLight dark:bg-bgDark min-h-screen flex flex-col items-center justify-center">
      {/* login container */}
      <div className="bg-bgDark dark:bg-bgLight flex rounded-3xl shadow-lg max-w-6xl p-4">
        <div className="w-1/2 px-8 mt-4 flex flex-col items-center">
          <img src={darkMode} className="" alt="" />
          <form className="font-Inter flex flex-col justify-center items-center w-3/4 gap-4 mt-28">
            <h2 className="text-2xl font-InterTight font-bold text-textDark dark:text-textLight">
              Login to your account to get started!
            </h2>
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="text"
              name="username"
              placeholder="Your username"
            />

            <div className="relative w-full">
              <input
                className="p-2 rounded-xl w-full transition ease-in-out delay-50 shadow"
                type={showPassword ? "password" : "text"}
                name="passwordField"
                id="password"
                value={password}
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                id="togglePasswordBtn"
                onClick={togglePasswordVisibility}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <button className="transition ease-in-out delay-50 bg-accentLight hover:bg-green-700 hover:-translate-y-1 w-32 h-12 rounded-xl text-bgLight py-2">
              Login
            </button>
          </form>

          <p className="mt-5 text-xs border-b py-6 font-Inter text-textDark dark:text-textLight">
            Forgot your credentials?
          </p>
          <div className="mt-3 text-xs flex justify-between items-center gap-4 font-Inter text-textDark dark:text-textLight">
            <p>Don't have an account?</p>
          </div>
          <button
            className="font-Inter mt-8 py-2 px-5 text-xs bg-bgLight dark:bg-bgDark rounded-xl text-textLight dark:text-textDark
            transition ease-in-out delay-50 hover:scale-x-110 hover:scale-y-110"
          >
            Register
          </button>
        </div>

        {/* splash image */}
        <div className="w-1/2 relative ">
          <img className="rounded-2xl" src={splashLoginImage} alt="Splash" />
          <p className="font-InterTight absolute bottom-4 left-4 text-textDark">
            Photo Credit: Unsplash
          </p>
        </div>
      </div>
      <footer className="mt-2 relative bottom-0  left-[450px] font-InterTight text-textLight dark:text-textDark">
        <h1>Coded with ❤️ for CSE347 (4)</h1>
      </footer>
    </main>
  );
};

export default _Login;

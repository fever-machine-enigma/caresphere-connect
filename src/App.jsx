import "./App.css";

import logoLight from "./assets/logoLight.png";
import logoDark from "./assets/logoDark.png";
import hero1 from "./assets/hero-1.jpg";
import hero2 from "./assets/hero-2.jpg";
import hero3 from "./assets/hero-3.jpg";
import hero4 from "./assets/hero-4.jpg";
import hero5 from "./assets/hero-5.jpg";
import hero6 from "./assets/hero-6.jpg";

import { useState, useEffect } from "react";

function App() {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, heroImages.length]);

  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkMode = prefersDarkMode ? logoLight : logoDark;

  return (
    <body className="text-textLight dark:text-textDark bg-bgLight dark:bg-bgDark">
      <div id="home" className="min-h-screen max-w-8">
        <header className="p-4 font-Inter flex flex-row justify-between">
          <img className="px-4 w-96" src={darkMode} alt="" />
          <ul className="text-lg w-15 flex flex-row gap-16 items-center ">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <button className="transition ease-in-out delay-50 bg-gradient-to-r from-accentLight to-primaryLight  dark:bg-gradient-to-r dark:from-accentDark dark:to-primaryDark hover:scale-x-110 hover:scale-y-110 hover:bg-gradient-to-r hover:from-primaryDark hover:to-accentDark text-textLight hover:text-textDark  w-32 h-12 mr-10 rounded-3xl">
              Login
            </button>
          </ul>
        </header>
        <div id="hero" className="flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center w-1/2 ml-40 mt-52">
            <h1 className=" font-InterTight font-bold text-7xl">
              <span className="bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
                CareSphere
              </span>
              : Nurturing Wellness, Connecting Hearts.
            </h1>
            <p className="mt-8 text-2xl text-start font-Inter">
              Your Portal to Compassionate Healthcare Excellence.
            </p>
            <div className="mt-8  flex flex-row font-Inter gap-8">
              <button className="transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
                Learn More
              </button>
              <button className="transition ease-in-out delay-50 bg-primaryLight dark:bg-primaryDark hover:scale-x-110 hover:scale-y-110 hover:bg-primaryLight text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
                Our Prices
              </button>
            </div>
          </div>
          <div className="relative w-1/2">
            <div className="">
              {heroImages.map((heroImage, index) => (
                <div
                  key={index}
                  className={`w-[530px] absolute top-0.5 left-36 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    className="rounded-2xl object-cover"
                    src={heroImage}
                    alt={`Hero Image - ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="min-h-screen max-w-8 flex flex-row">
        <div className="font-InterTight font-bold w-1/6 text-[300px] flex flex-col items-center justify-end mb-64">
          <h1 className="-rotate-90">About</h1>
        </div>
        <div className="w-full flex flex-col justify-center font-InterTight text-[2rem] gap-32 px-4">
          <p>
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            – a healthcare technology leader. Our flagship product,{" "}
            <span className="font-bold bg-gradient-to-r from-accentDark to-primaryDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            <span className="font-bold text-transparent bg-clip-text bg-primaryDark">
              | Connect
            </span>{" "}
            , is a game-changer for providers, featuring seamless{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              appointment scheduling
            </span>{" "}
            and{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              prescription management.
            </span>{" "}
          </p>
          <p>
            This cutting-edge portal ensures{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              efficiency
            </span>{" "}
            , letting healthcare professionals prioritize{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              patient care.
            </span>{" "}
            Experience the future with our{" "}
            <span className="font-bold text-transparent bg-clip-text bg-secondaryDark">
              telehealth services
            </span>{" "}
            , breaking down barriers and connecting patients with{" "}
            <span className="font-bold text-transparent bg-clip-text bg-secondaryDark">
              quality healthcare
            </span>
            , anytime, anywhere.
          </p>
          <p>
            At CareSphere, we're committed to reshaping healthcare tech,
            bridging innovation with{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              patient-centric care
            </span>{" "}
            . Join us on this journey, where technology meets compassion for a
            healthier tomorrow with{" "}
            <span className="font-bold bg-gradient-to-r from-primaryDark to-accentDark text-transparent bg-clip-text">
              CareSphere
            </span>{" "}
            <span className="font-bold text-transparent bg-clip-text bg-accentDark">
              | Connect
            </span>{" "}
            leading the way.
          </p>
        </div>
      </div>
      <div
        id="pricing"
        className="min-h-screen max-w-5/6 flex flex-col justify-center items-center"
      >
        <div>
          <h1 className="font-InterTight font-bold text-[150px] mb-12">
            Pricing
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-20">
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CareBasic</h1>
              <p className="font-Inter">For first timers</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-6xl text-center">$0.00</h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ Trial version</p>
              <p>✔️ Free to use for 7 days</p>
              <p>✔️ Payment after 7 days</p>
            </div>
            <button className="mt-[151px] font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Start
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePlus Alpha</h1>
              <p className="font-Inter">Pay a monthly fee</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark py-8">
              <h1 className="font-Inter text-3xl text-center">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ Appointment Scheduling</p>
              <p>✔️ Prescription Management</p>
              <p>✔️ Doctors/Nurses Information</p>
              <p>✔️ Vaccination Application</p>
              <p>✔️ Medical Profile</p>
            </div>
            <button className="mt-20 font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePlus Beta</h1>
              <p className="font-Inter">Pay a yearly fee</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-3xl text-center py-4">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ CarePlus Alpha Privileges</p>
              <p>✔️ Access to CareSphere feature library</p>
              <p>✔️ Updates about future features</p>
            </div>
            <button className="mt-28 font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
          <div className="w-[300px] bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight h-[600px] rounded-2xl p-8">
            <div>
              <h1 className="font-Inter font-bold text-3xl">CarePro</h1>
              <p className="font-Inter">For your enterprise</p>
            </div>
            <div className="mt-8 bg-primaryLight dark:bg-primaryDark h-[100px] rounded-2xl text-textDark p-4">
              <h1 className="font-Inter text-3xl text-center py-4">
                Call for Prices
              </h1>
            </div>
            <div className="mt-12 font-Inter flex flex-col gap-4 text-sm px-2">
              <p>✔️ CarePlus Beta Privileges</p>
              <p>✔️ Full access to customization</p>
              <p>✔️ Custom organization-based feature implementation</p>
            </div>
            <button className="mt-[132px] font-Inter transition ease-in-out delay-50 bg-primaryLight dark:bg-green-400 hover:scale-x-110 hover:scale-y-110 hover:bg-green-500 text-textLight hover:text-textDark text-lg w-60 h-12  rounded-3xl">
              Buy
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;

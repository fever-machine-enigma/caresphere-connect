import splashImage from "../../public/login-register/registerSplash.jpg";

const _Register = () => {
  return (
    <main className="bg-bgLight dark:bg-bgDark min-h-screen flex flex-col items-center justify-center">
      {/* splash image */}

      {/* register container */}
      <div className="bg-bgDark dark:bg-bgLight flex rounded-3xl shadow-lg max-w-6xl p-4">
        <div className="w-1/2 relative">
          <img className="rounded-2xl" src={splashImage} alt="Splash" />

          <p className="font-InterTight absolute bottom-2 left-4 text-textLight">
            Photo Credit: Unsplash
          </p>
        </div>
        <div className="w-1/2 px-8 flex flex-col items-center">
          <form className="font-Inter flex flex-col justify-center items-center w-3/4 mt-10">
            <h2 className="text-3xl font-InterTight font-bold text-textDark dark:text-textLight">
              Register an account today!
            </h2>
            <div className="flex flex-row gap-2">
              <input
                className="p-2 mt-8 rounded-xl w-full shadow"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="p-2 mt-8 rounded-xl w-full  shadow"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="text"
              name="username"
              placeholder="User Name"
            />
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="text"
              name="password"
              placeholder="Enter Password"
            />
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <input
              className="p-2 mt-8 rounded-xl w-full shadow"
              type="text"
              name="doctorKey"
              placeholder="Referral Key*"
            />

            <button className="transition ease-in-out delay-50 bg-accentLight w-32 h-12 mt-8 rounded-xl text-bgLight py-2 hover:bg-primaryDark hover:scale-110">
              Register
            </button>
            <div className="font-Inter relative w-full mt-4">
              <p className="text-xs">
                *If you have partaken any services of a healthcare provider,
                they will have provided you with a referral key to make your
                account on their CareSphere network.
              </p>
              <p className="text-xs mt-2">
                *Use this key to sign up on{" "}
                <span className="font-bold">CareSphere | Network</span>.
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-2 relative bottom-0  left-[450px] font-InterTight text-textLight dark:text-textDark">
        <h1>Coded with ❤️ for CSE347 (4)</h1>
      </footer>
    </main>
  );
};

export default _Register;

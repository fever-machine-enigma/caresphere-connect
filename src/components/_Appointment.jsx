import { BiSearch, BiListUl } from "react-icons/bi";

const _Appointment = () => {
  return (
    <main className="flex gap-4 min-h-full">
      <div className="flex flex-col gap-4 w-1/2">
        <header className="p-3 flex items-center justify-between rounded-full h-16 w-full bg-bgDark">
          <div className="flex items-center relative w-1/2">
            <BiSearch
              fontSize={25}
              className="text-textLight absolute top-2 left-3"
            />
            <input
              className="pl-11 pr-4 rounded-full h-10 w-full focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div>
            <button className="transition ease-in-out duration-100 border-2 h-10 w-24 justify-center text-textDark hover:text-textLight hover:bg-bgLight rounded-full flex items-center gap-1">
              <span className="text-lg font-Inter">Filter</span>
              <BiListUl fontSize={25} className="hover:text-textLight" />
            </button>
          </div>
        </header>
        <div className="p-6 rounded-3xl flex flex-col flex-1 h-full bg-bgDark">
          <header className="font-Inter font-bold text-4xl text-textDark mb-4">
            Doctors
          </header>
          <div className="flex-1 bg-bgLight rounded-2xl"></div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 min-h-full bg-bgDark rounded-3xl p-4">
        <header className="font-Inter font-bold text-4xl text-textDark mb-4">
          Profile
        </header>
        <div className="flex-1 bg-bgLight rounded-2xl"></div>
      </div>
    </main>
  );
};

export default _Appointment;

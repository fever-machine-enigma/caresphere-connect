import { BiSearch, BiListUl } from "react-icons/bi";
import userData from "../../data/user/db.json";
import { useState } from "react";

const _Appointment = () => {
  const doctorList = userData.filter((user) => user.userType === "Doctor");

  const mappedDoctorList = doctorList.map((doctor) => ({
    id: doctor.id,
    referral: doctor.referral,
    userType: doctor.userType,
    userPosition: doctor.userPosition,
    department: doctor.department,
    status: doctor.status,
    org: doctor.org,
    branch: doctor.branch,
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    profilePhoto: doctor.profilePhoto,
    userName: doctor.userName,
    password: doctor.password,
    sits: doctor.sits,
    leaves: doctor.leaves,
    workdays: doctor.workdays,
    room: doctor.room,
  }));
  const [selectedCard, setSelectedCard] = useState(null);

  const handleProfileView = (user) => {
    setSelectedCard(user);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = mappedDoctorList.filter((doctor) =>
    Object.values(doctor).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
              className="font-Inter pl-11 pr-4 rounded-full h-10 w-full focus:outline-none"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className="transition ease-in duration-100 border-2 h-10 w-24 justify-center text-textDark hover:text-textLight hover:bg-bgLight rounded-full flex items-center gap-1">
              <span className="text-lg font-Inter">Filter</span>
              <BiListUl fontSize={25} className="hover:text-textLight" />
            </button>
          </div>
        </header>
        <div className="p-6 rounded-3xl flex flex-col flex-1 h-full bg-bgDark">
          <header className="font-Inter font-bold text-4xl text-textDark mb-4">
            Doctors
          </header>
          <div className="p-4 gap-2 flex-1 flex bg-bgLight rounded-2xl h-full">
            {filteredDoctors.map((user) => (
              <div
                className={`hover:bg-accentDark transition ease-in-out duration-200 cursor-pointer flex  justify-center flex-row h-80 border-textLight rounded-2xl border-4 w-1/3 ${
                  selectedCard == user ? "bg-green-700" : ""
                }`}
                key={user.id}
                onClick={() => {
                  handleProfileView(user);
                }}
              >
                <div
                  id="cardContent"
                  className="flex flex-col gap-2 justify-evenly items-center "
                >
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    src={user.profilePhoto}
                    alt=""
                  />
                  <div
                    id="nameContainer"
                    className="flex flex-col items-center justify-center "
                  >
                    <div className="flex gap-1">
                      <span className="font-Inter Tight text-2xl font-bold">
                        {user.firstName}
                      </span>
                      <span className="font-Inter Tight text-2xl font-bold">
                        {user.lastName}
                      </span>
                    </div>
                    <p id="positionContainer">
                      <span className="text-md font-Inter">
                        {user.userPosition}
                      </span>
                    </p>
                    <div id="specContainer" className="mt-2">
                      <div className="flex items-center justify-center font-Inter text-sm font-bold h-7 w-full p-3 rounded-full  bg-bgDark text-white">
                        {user.department}
                      </div>
                    </div>
                  </div>
                  <button className="transition ease-in duration-100 border-2 w-48 h-10 rounded-full font-Inter font-bold bg-primaryDark hover:text-white hover:bg-sky-500 hover:border-spacing-2">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 min-h-full bg-bgDark rounded-3xl p-4">
        <header className="font-Inter font-bold text-4xl text-textDark mb-4">
          Profile
        </header>
        <div className="p-2 h-full flex-1 bg-bgLight rounded-2xl">
          {selectedCard && (
            <section className="flex-col items-center mt-3">
              <div className="h-1/2  w-full flex justify-center">
                <img
                  src={selectedCard.profilePhoto}
                  className="w-96 h-96 rounded-full object-cover"
                />
                <div className="w-1/2 flex flex-col justify-center items-center gap-2">
                  <div className="flex flex-1 flex-col justify-center items-center">
                    <h1 className="font-Inter font-bold text-4xl">
                      {selectedCard.firstName} {selectedCard.lastName}
                    </h1>
                    <h1 className="font-Inter text-xl">
                      {selectedCard.userPosition}
                    </h1>
                    <h1 className="mt-4 font-Inter font-bold text-lg flex items-center justify-center h-7 w-auto p-5 rounded-full  bg-bgDark text-white">
                      {selectedCard.department}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="h-1/2 flex">
                <div className="p-2 w-1/2 h-full flex flex-col  ">
                  <div className="h-1/3">
                    <span className="h-1/2 font-InterTight font-bold text-2xl">
                      Workdays
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white  bg-blue-600 w-full flex justify-center items-center text-3xl ">
                      {selectedCard.workdays}
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 font-InterTight font-bold text-2xl">
                      Sits at
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white bg-green-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.sits}</span>
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Leaves at
                    </span>
                    <div className="font-Inter font-bold h-1/2 p-4 rounded-full text-white bg-red-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.leaves}</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 h-full flex flex-col mt-1">
                  <div className="h-1/3 ">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Branch
                    </span>
                    <div className="font-Inter bg-bgDark font-bold h-1/2 p-4 rounded-full text-white bg-black-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.branch}</span>
                    </div>
                  </div>
                  <div className="h-1/3 ">
                    <span className="h-1/2 my-1  font-InterTight font-bold text-2xl">
                      Room
                    </span>
                    <div className="font-Inter bg-bgDark font-bold h-1/2 p-4 rounded-full text-white bg-black-600 w-full flex justify-end items-center text-4xl ">
                      <span>{selectedCard.room}</span>
                    </div>
                  </div>
                  <div className="h-1/3">
                    <span className="h-1/2 mt-40  font-InterTight font-bold text-2xl">
                      Appointment
                    </span>
                    <button className="transition ease-in-out duration-300 font-Inter bg-yellow-500 hover:bg-primaryDark hover:text-textDark font-bold h-[70px] p-4 rounded-full text-black bg-black-600 w-full flex justify-center items-center text-3xl ">
                      Book an Appointment
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default _Appointment;

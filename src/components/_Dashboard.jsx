import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import asgarLogo from "../../public/asgar-ali-hospital.webp";
import presc1 from "../../public/meds/losectil-20.png";
import doc1 from "../../public/doctor-img/doc1.jpg";
import hepB from "../../public/vaccine-img/hepb.jpg";
import { BiDotsVerticalRounded } from "react-icons/bi";

const _Dashboard = () => {
  const events = [
    {
      title: "S.Rahman",
      start: "2023-12-11T10:00:00",
      end: "2023-12-12T12:00:00",
    },
  ];

  return (
    <main className="min-h-full flex">
      <div className="p-2 w-1/2 ">
        <FullCalendar
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-3">
        <div className="flex flex-col p-4 h-1/3 border bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-xl font-Inter font-bold text-textDark ">
              Announcements
            </span>
            <button className="bg-primaryDark border-2 rounded-3xl h-10 w-40 font-Inter font-bold text-textDark mr-5">
              Mark all as Read
            </button>
          </div>
          <div className="flex flex-col p-2 rounded-xl flex-1 bg-bgLight">
            <div className="font-Inter h-20 rounded-xl w-full p-2  bg-bgDark flex justify-between items-center">
              <div className="flex gap-4">
                <img className="h-14 w-14 rounded-xl" src={asgarLogo} alt="" />
                <div className="">
                  <h1 className="text-white font-Inter font-bold text-xl">
                    Merry Christmas!
                  </h1>
                  <p className="text-white font-Inter text-md">
                    Wishing you a Merry Christmas and Happy Holidays on behalf
                    of...
                  </p>
                </div>
              </div>

              <button className="mr-2 text-textDark">
                <BiDotsVerticalRounded fontSize={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 h-1/3  bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-xl font-Inter font-bold text-white ">
              Prescriptions
            </span>
            <button className="bg-primaryDark border-2 rounded-3xl h-10 w-40 font-Inter font-bold text-textDark mr-5">
              Drop-down
            </button>
          </div>
          <div className="p-2 rounded-xl flex-1 bg-bgLight">
            <div className="font-Inter h-20 rounded-xl w-full p-2  bg-bgDark  flex justify-between items-center">
              <div className="flex gap-4">
                <img className="h-14 w-14 rounded-lg" src={presc1} alt="" />
                <div>
                  <div>
                    <h1 className="flex gap-2 text-white font-Inter font-bold text-xl">
                      Losectil 20{" "}
                      <div className="flex items-center justify-center bg-sky-300 rounded-xl w-20 text-sm font-InterTight text-black">
                        Morning
                      </div>
                      <div className="flex items-center justify-center bg-yellow-300 rounded-xl w-12 text-sm font-InterTight text-black">
                        Noon
                      </div>
                      <div className="flex items-center justify-center bg-indigo-300 rounded-xl w-12 text-sm font-InterTight text-black">
                        Night
                      </div>
                    </h1>
                  </div>
                  <p className="text-white font-Inter text-md">
                    To cure your Duodenal and gastric ulcer.
                  </p>
                </div>
              </div>

              <button className="mr-2 text-textDark">
                <BiDotsVerticalRounded fontSize={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 h-1/3 border bg-bgDark rounded-3xl">
          <div className="flex justify-between items-center mb-3 ">
            <span className="text-xl font-Inter font-bold text-textDark ">
              Vaccinations
            </span>
            {/* <button className="bg-primaryDark border-2 rounded-3xl h-10 w-40 font-Inter font-bold text-textDark mr-5">
              Cough-Nausea
            </button> */}
          </div>
          <div className="p-2 rounded-xl flex-1 bg-bgLight">
            <div className="font-Inter-border h-20 rounded-xl w-full p-2  bg-bgDark  flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={hepB}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="flex gap-2 text-white font-Inter font-bold text-xl">
                    Hepatitis -B
                  </h1>
                  <p className="text-white font-Inter text-md">
                    Date: 08 December, 2023
                  </p>
                </div>
              </div>

              <div className="">
                <img
                  className="h-14 w-14 rounded-lg object-cover"
                  src={doc1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default _Dashboard;

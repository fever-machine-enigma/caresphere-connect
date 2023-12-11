import { ShoppingCart } from "phosphor-react";
import logoPharma from "../../public/login-register/logoPharma.png";
import { Link } from "react-router-dom";
import { BiSearch, BiMicrophone } from "react-icons/bi";
import medData from "../../data/medicine/db.json";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function _Medication() {
  const [searchTerm, setSearchTerm] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleProfileView = (user) => {
    setSelectedCard(user);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMeds = medData.filter((meds) =>
    Object.values(meds).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <main className="bg-bgDark h-full rounded-3xl p-2">
      <nav className="flex justify-between items-center h-36">
        <div>
          <img className="h-32" src={logoPharma} alt="Pharma Logo" />
        </div>
        <div className="relative">
          <BiSearch
            fontSize={30}
            className="text-textLight absolute top-4 left-4"
          />
          <input
            type="text"
            className="h-16 w-[600px] rounded-full px-14 font-Inter text-2xl focus:outline-none"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <BiMicrophone
            fontSize={35}
            className="text-textLight absolute top-4 right-4"
          />
        </div>
        <div>
          <Link
            className="flex items-center gap-2 text-white bg-primaryDark hover:bg-green-600 transition ease-in duration-150 px-5 py-1 mr-7 rounded-full cursor-pointer"
            to={"/medCart"}
          >
            <h1 className="font-Inter font-bold text-2xl">Cart: </h1>
            <ShoppingCart className="" size={50} />
          </Link>
        </div>
      </nav>
      <section className="bg-bgLight h-[690px] overflow-auto scrollbarStyle rounded-2xl p-4 flex gap-2 flex-wrap">
        {filteredMeds.map((meds) => (
          <div
            key={meds.id}
            id="cardContainer"
            className="transition ease-in-out duration-150 h-[400px] w-[290px] border-4 border-gray-600 hover:bg-accentDark flex flex-col items-center justify-center rounded-2xl gap-4 cursor-pointer"
            onClick={() => handleProfileView(meds)}
          >
            <div id="medImg">
              <img className="w-32 h-32 rounded-xl" src={meds.image} alt="" />
            </div>
            <div className="font-Inter font-bold text-3xl" id="medName">
              <h1>{meds.medName}</h1>
            </div>
            <div
              className={`font-Inter text-md font-bold p-2 rounded-full text-white ${
                meds.medType == "Capsule" && "bg-red-500"
              }
              ${meds.medType == "Tablet" && "bg-lime-600"}
              ${meds.medType == "Syrup" && "bg-indigo-500"}`}
            >
              <h1>{meds.medType}</h1>
            </div>
            <div className="font-Inter text-3xl">
              <h1>${meds.price}</h1>
            </div>
            <button
              onClick={openModal}
              className="transition ease-in-out duration-150 grid place-content-center font-Inter font-bold text-xl text-white bg-primaryLight hover:bg-yellow-500 hover:text-black rounded-full p-3 "
            >
              Add to Cart
            </button>
          </div>
        ))}
        {selectedCard && (
          <Dialog open={isOpen} onClose={() => closeModal()}>
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-700/80">
              <Dialog.Panel className="flex flex-col gap-10 p-8 w-full max-w-3xl h-full max-h-2xl rounded-xl bg-white">
                <Dialog.Title>
                  <h1 className="text-4xl font-InterTight font-bold">
                    Add to Cart
                  </h1>
                </Dialog.Title>
                <div className="flex items-center gap-2 p-2">
                  <div className="w-1/2">
                    <img
                      className="w-80 h-80 border-2 border-gray-700 rounded-xl"
                      src={selectedCard.image}
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                    <div>
                      <h1 className="font-Inter font-bold text-4xl">
                        {selectedCard.medName}
                      </h1>
                    </div>
                    <div>
                      <h1
                        className={`font-Inter text-2xl font-bold p-2 rounded-full text-white ${
                          selectedCard.medType == "Capsule" && "bg-red-500"
                        }
              ${selectedCard.medType == "Tablet" && "bg-lime-600"}
              ${selectedCard.medType == "Syrup" && "bg-indigo-500"}`}
                      >
                        {selectedCard.medType}
                      </h1>
                    </div>
                  </div>
                </div>
                <div></div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </section>
    </main>
  );
}

{
  /* ; */
}

import { Popover, Transition, Menu } from "@headlessui/react";
import { BiChat, BiBell } from "react-icons/bi";
import { Fragment } from "react";
import classNames from "classnames";
import profileimg from "../../../public/profileimg.jpg";
import { useNavigate } from "react-router-dom";
export default function _Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-bgDark h-16 px-2 flex justify-between items-center rounded-3xl ">
      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          Asgar Ali Hospital Ltd.
        </h1>
      </div>
      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          07:24 PM
        </h1>
      </div>
      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          07 December, 2023
        </h1>
      </div>
      <div>
        <h1 className="px-4 font-InterTight font-bold text-3xl text-textDark">
          Clear 97°
        </h1>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-bgLight",
                  "p-1.5 rounded-full inline-flex items-center hover:bg-textDark   focus:outline-none "
                )}
              >
                <BiChat
                  fontSize={30}
                  className={classNames(
                    open && "text-textLight",
                    "text-textDark hover:text-textLight"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 bg-bgLight text-textLight top-14">
                  <div className="font-Inter bg-bgLight rounded-2xl shadow-lg ring- ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" text-textLight font-bold">
                      Messages
                    </strong>
                    <div className="mt-2 py-1">This is the messages panel.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-bgLight",
                  "p-1.5 rounded-full inline-flex items-center hover:bg-textDark   focus:outline-none "
                )}
              >
                <BiBell
                  fontSize={30}
                  className={classNames(
                    open && "text-textLight",
                    "text-textDark hover:text-textLight"
                  )}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 w-80 bg-bgLight text-textLight top-14">
                  <div className="font-Inter bg-bgLight rounded-2xl shadow-lg ring- ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className=" text-textLight font-bold mt-2">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1">
                      This is the notifications panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-3xl focus:outline-none ">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-3xl bg-cover bg-no-repeat ring-2 ring-accentLight bg-center"
                style={{
                  backgroundImage: `url(${profileimg})`,
                }}
              >
                <span className="sr-only">Shafin Rahman</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-4 w-48 rounded-xl shadow-lg p-1 bg-bgLight ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col items-start font-Inter">
              <span className="font-bold px-4 pt-2">Shafin Rahman</span>
              <span className="px-4 mb-4">Developer</span>
              <hr className="px-4 w-full border-1 border-bgDark" />
              <Menu.Item className="mt-2">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark  cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    Set Status
                    <Menu.Items>
                      <Menu.Item className="mt-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => navigate("/profile")}
                          >
                            🟢 Active
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item className="">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-yellow-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => navigate("/profile")}
                          >
                            🟡 Away
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item className="mb-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-red-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => navigate("/profile")}
                          >
                            🔴 Ignore
                          </div>
                        )}
                      </Menu.Item>
                      <hr className="px-4 w-full border-1 border-bgDark" />
                      <Menu.Item className="mt-2">
                        {({ active }) => (
                          <div
                            className={classNames(
                              active && "text-md bg-bgDark text-textDark",
                              "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-gray-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                            )}
                            onClick={() => navigate("/profile")}
                          >
                            ⚫ DND
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-green-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item className="">
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-bgDark text-textDark",
                      "bg-bgLight text-textLight focus:bg-bgDark focus:text-textDark hover:bg-red-400 cursor-pointer rounded-2xl px-4 py-2 w-full"
                    )}
                    onClick={() => navigate("/login")}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

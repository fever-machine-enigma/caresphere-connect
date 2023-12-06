import logo from "../../../public/login-register/logoLight.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { BiLogOut } from "react-icons/bi";

const linkClasses =
  "hover:bg-[#103147] hover:rounded-3xl  flex items-center mt-2 gap-4 font-Inter px-7 py-2 text-base ";

const _Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="font-Inter bg-bgDark w-72 p-3 flex flex-col text-textDark">
      <div className="flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 mt-8 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarkLink key={item.key} item={item} />
        ))}
      </div>
      <hr className=" border-textDark/30" />
      <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarkBottomLink key={item.key} item={item} />
        ))}

        <div
          onClick={() => navigate("/login")}
          className={classNames("text-red-500 cursor-pointer", linkClasses)}
        >
          <span className="text-3xl">
            <BiLogOut />
          </span>
          <span className="text-xl ">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default _Sidebar;

function SidebarkLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-[#103147] rounded-3xl" : "",
        linkClasses
      )}
    >
      <span className="text-3xl active text-accentDark">{item.icon}</span>
      <span className="text-xl">{item.label}</span>
    </Link>
  );
}
function SidebarkBottomLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white bg-[#103147] rounded-3xl" : "",
        linkClasses
      )}
    >
      <span className="text-3xl active text-accentDark">{item.icon}</span>
      <span className="text-xl">{item.label}</span>
    </Link>
  );
}

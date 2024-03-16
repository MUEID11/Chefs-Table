import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import background from "../assets/background.jpg";
const Header = () => {
  return (
    <header>
      <nav className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaHamburger />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <label className="hidden input input-bordered lg:flex items-center gap-2 rounded-full mr-2">
              <input type="text" className="grow" placeholder="Search" />
              <span className="text-xl">
                <IoMdSearch />
              </span>
            </label>
            <span className="lg:text-5xl text-2xl text-green-500">
              <CgProfile />
            </span>
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="text-center text-white"
      >
        <h1 className="text-7xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p>
          The authentic taste comes from family recipes and from fresh, simple
          and tasteful ingredients straight from home. In every taco from LOS
          TACOS No. 1 there is a bit of true Mexican culture and flavor.
        </p>
        <button className="bg-green-400 text-xl rounded-full">
          Explore Now
        </button>
        <button className="text-xl border-2 rounded-full bg-transparent">
          Our Feedback
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  faChevronDown,
  faRightFromBracket,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import { setLogout } from "@/states/slices/authSlice";
import { Heading } from "@/components/inputs/TextInputs";

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (["auth/login", "auth/register"].includes(pathname)) return null;

  const navDropdown = [
    { title: "Profile", link: "/user-profile", icon: faUser },
    { title: "Notifications", link: "/notifications", icon: faBell },
    { title: "Logout", link: "/auth/login", icon: faRightFromBracket },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-[1000] bg-white shadow-md transition-all duration-300
        ${
          pathname.includes("services")
            ? "px-4 sm:px-6 md:px-[7%]"
            : "px-4 sm:px-6 md:px-[2%]"
        }
        py-2 sm:py-3 h-[9vh] flex items-center justify-between ${className}`}
    >
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          if (token) {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }}
        className="flex-shrink-0 text-2xl font-bold bg-gradient-to-tr from-primary to-primary/80 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
      >
        <Heading type="h2">{user?.institution?.name || " Citizen Complaints System"}</Heading>
      </Link>

      <section className="flex items-center gap-2 sm:gap-3 ml-auto">
        <button
          className="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-neutral-700 text-lg sm:text-xl"
          />
        </button>

        <section className="relative">
          <button
            className="flex items-center cursor-pointer hover:bg-neutral-100 gap-2 sm:gap-3 p-1.5 sm:p-2 pr-2 sm:pr-3 rounded-xl transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <figure className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-600 font-medium">
              {user?.name?.[0]?.toUpperCase() ||
                user?.email?.[0]?.toUpperCase() ||
                "U"}
            </figure>
            <article className="hidden sm:flex flex-col items-start">
              <span className="text-sm font-medium text-neutral-900 truncate max-w-[170px]">
                {user?.name}
              </span>
              <span className="text-xs text-neutral-600 truncate max-w-[170px]">
                {user?.email || user?.phoneNumber}
              </span>
            </article>
            <FontAwesomeIcon
              className={`text-neutral-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              icon={faChevronDown}
            />
          </button>
        </section>
      </section>

      <NavDropdown isOpen={isOpen}>
        <section className="py-2 w-full rounded-2xl shadow-xl bg-white border border-neutral-200">
          <article className="sm:hidden p-4 border-b border-neutral-200">
            <h3 className="font-medium text-neutral-900">{user?.name}</h3>
            <p className="text-sm text-neutral-600 truncate">
              {user?.email || user?.phoneNumber}
            </p>
          </article>
          <nav className="py-2">
            {navDropdown.map((nav, index) => (
              <Link
                key={index}
                to={nav.link}
                onClick={(e) => {
                  e.preventDefault();
                  if (nav.title === "Logout") {
                    dispatch(setLogout());
                    window.location.href = "/auth/login";
                  }
                  navigate(nav.link);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-blue-600 transition-colors duration-200 
                  ${
                    ["Theme", "Notifications"].includes(nav.title)
                      ? "min-[450px]:hidden"
                      : ""
                  }`}
              >
                <FontAwesomeIcon className="w-4 h-4" icon={nav.icon} />
                {nav.title}
              </Link>
            ))}
          </nav>
        </section>
      </NavDropdown>

      <aside
        className={`md:hidden fixed inset-0 z-[1001] transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        <section
          className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav
          className={`absolute top-0 left-0 h-full w-[260px] sm:w-[300px] bg-white shadow-2xl rounded-tr-xl rounded-br-xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <header className="flex items-center justify-end p-3 border-b border-neutral-200 bg-neutral-100/70">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
            </button>
          </header>
          <section className="py-2">
            <header className="px-3 py-3 border-b border-neutral-200 bg-gradient-to-br from-primary/10 to-white">
              <figure className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-600 font-medium text-[15px]">
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </span>
                <figcaption>
                  <p className="font-medium text-neutral-900 text-sm">
                    {user?.name}
                  </p>
                  <p className="text-xs text-neutral-600 truncate max-w-[160px]">
                    {user?.email || user?.phoneNumber}
                  </p>
                </figcaption>
              </figure>
            </header>
            <nav className="py-2">
              <ul className="space-y-0.5">
                {navDropdown.map((nav, index) => (
                  <li key={index}>
                    <Link
                      to={nav.link}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (nav.title === "Logout") {
                          dispatch(setLogout());
                          window.location.href = "/auth/login";
                        }
                        navigate(nav.link);
                      }}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-blue-600 transition-all duration-200"
                    >
                      <FontAwesomeIcon
                        icon={nav.icon}
                        className="w-4 h-4 text-neutral-500"
                      />
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </nav>
      </aside>
    </header>
  );
};

interface NavDropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const NavDropdown: FC<NavDropdownProps> = ({ isOpen, children }) => {
  const { pathname } = useLocation();
  return (
    <aside
      className={`${
        isOpen ? "translate-y-0" : "translate-y-[-400px]"
      } ease-in-out duration-500 z-[10000] absolute top-[9vh] ${
        pathname.includes("services") ? "right-[7%]" : "right-[2%]"
      } w-[250px] bg-transparent shadow-xl rounded-2xl max-[450px]:w-[100vw]`}
      role="dialog"
      aria-modal="true"
      aria-label="User menu"
    >
      {children}
    </aside>
  );
};

export default Navbar;

import { currentUser, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "sonner";
import VelocityLogo from "@/assets/velocity-logo.png";
import { Button } from "../button";
import { HiMenu } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LucideIdCard } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/all-cars", name: "All Cars" },
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact Us" },
  ];

  // user
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();
  // user

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    await dispatch(logout());
    toast.success("Successful log out", { duration: 1000 });
  };

  // Hide/Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close desktop menu when clicking outside
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(null);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleDropdown = (index: number) => {
    setMenuOpen(menuOpen === index ? null : index); // Toggle the menu
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between py-2.5 lg:px-0">
        <Link to="/" className="flex w-1/5 items-end">
          <img className="w-6 md:w-8" src={VelocityLogo} alt="velocity-logo" />{" "}
          <span className="text-velo-black dark:text-white border-velo-maroon -ml-0.5 border-b-2 font-semibold md:-ml-1 md:text-xl">
            elocity.
          </span>
        </Link>

        {/* Large Device Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`border-b-2 px-0.5 text-base text-[16px] duration-300 ${
                location.pathname === item.path
                  ? "text-velo-red border-velo-red"
                  : "hover:border-velo-red text-velo-black dark:text-white hover:text-velo-red border-transparent"
              }`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden w-1/5 justify-end lg:flex items-center gap-3">
          <ThemeToggle />
          
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <Button
                onClick={() => toggleDropdown(0)}
                className="bg-velo-red hover:bg-velo-maroon flex h-11 items-center gap-1.5 text-[17px]"
              >
                <LucideIdCard className="size-5.5" /> Account
              </Button>
              {menuOpen === 0 && (
                <ul className="animate-slide-down absolute right-0 mt-2 w-40 space-y-1.5 rounded-lg bg-white dark:bg-gray-800 p-2 shadow-lg">
                  <li>
                    <Link
                      to="/dashboard"
                      className="bg-velo-red/5 hover:bg-velo-red/10 dark:hover:bg-velo-red/20 flex items-center gap-1 rounded-lg px-3 py-2 duration-300 dark:text-white"
                    >
                      <MdOutlineSpaceDashboard className="text-velo-maroon size-5" />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Button
                      onClick={handleLogout}
                      className="bg-velo-black h-10 w-full hover:bg-black"
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button className="!bg-velo-red hover:!bg-velo-maroon h-11 w-22">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="">
                <Button className="!bg-velo-black h-11 w-24 hover:!bg-black">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="relative flex items-center gap-2 lg:hidden" ref={mobileDropdownRef}>
          <ThemeToggle />
          
          <Button
            onClick={toggleMobileMenu}
            className="bg-velo-red size-8 md:size-10"
          >
            <HiMenu className="text-xl" />
          </Button>

          {mobileMenuOpen && (
            <div className="animate-slide-down absolute right-0 z-50 mt-2 w-40 space-y-1 rounded-[10px] bg-white dark:bg-gray-800 p-1 shadow-lg">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`block rounded-md px-3 py-1.5 text-sm ${
                    location.pathname === item.path
                      ? "bg-velo-red text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mx-auto h-[1px] w-11/12 rounded-full bg-gray-300 dark:bg-gray-600" />
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={toggleMobileMenu}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="w-full rounded px-3 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-1">
                  <Link to="/login" onClick={toggleMobileMenu}>
                    <Button className="bg-velo-red w-full">Login</Button>
                  </Link>
                  <Link to="/register" onClick={toggleMobileMenu}>
                    <Button className="bg-velo-black w-full">Register</Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

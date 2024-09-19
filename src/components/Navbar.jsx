import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NewsComponent from "./NewsComponent";
import CharactersComponent from "./CharactersComponent";
import ComicsComponent from "./ComicsComponent";
import MoviesComponent from "./MoviesComponent";
import "./Navbar.css";

const navigation = [
  { name: "News", href: "#", current: true },
  { name: "Characters", href: "#", current: false },
  { name: "Comics", href: "#", current: false },
  { name: "Movies", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activePage, setActivePage] = useState(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  const handleMouseEnter = (page) => {
    setActivePage(page);
  };

  const handleMouseLeave = () => {
    if (!isPreviewHovered) {
      setActivePage(null);
    }
  };

  const handlePreviewMouseEnter = () => {
    setIsPreviewHovered(true);
  };

  const handlePreviewMouseLeave = () => {
    setIsPreviewHovered(false);
    if (!isNavbarHovered) {
      setActivePage(null);
    }
  };

  const renderPreviewComponent = () => {
    switch (activePage) {
      case "news":
        return <NewsComponent />;
      case "characters":
        return <CharactersComponent />;
      case "comics":
        return <ComicsComponent />;
      case "movies":
        return <MoviesComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="navbar">
      <div className="above bg-black">
        <div
          className="h-17 pl-16 pr-16 flex justify-between"
          onMouseEnter={() => setIsNavbarHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            border: "1px solid rgba(0, 0, 255, 0.3)",
            backgroundImage:
              "linear-gradient(135deg, #29323c%2010%,%20#485563%20100%)",
          }}
        >
          <div
            className="left flex items-center gap-4 p-3"
            style={{
              borderLeft: "1px solid rgba(0, 0, 255, 0.3)",
              borderRight: "1px solid rgba(0, 0, 255, 0.3)",
            }}
          >
            {/* Navigate to SignIn */}
            <Link to="/signin">
              <Button variant="outlined">Login</Button>
            </Link>
            
            {/* Navigate to SignUp */}
            <Link to="/signup">
              <Button variant="outlined">Sign Up</Button>
            </Link>
          </div>

          <div
            className="middle p-0"
            style={{ border: "1px solid rgba(0, 0, 255, 0.3)" }}
          >
            <img src="././Logo.png" alt="" className="h-16 w-18 object-cover" />
          </div>
          <div
            className="right flex items-center p-3 gap-4"
            style={{
              borderLeft:
                "1px solid rgba(0, 0, 255, 0.3)" /* Adjusted border opacity */,
              borderRight:
                "1px solid rgba(0, 0, 255, 0.3)" /* Adjusted border opacity */,
            }}
          >
            <p
              className="h-full flex items-center"
              style={{
                fontFamily: '"Matemasie", system-ui',
                fontWeight: 600,
                fontStyle: "normal",
                color: "white",
              }}
            >
              Unleash Your Inner Hero
            </p>
            <Link to="/search">
            <Button variant="outlined">
              <SearchOutlinedIcon />
              Search
            </Button></Link>
          </div>
        </div>
      </div>

      <Disclosure
        as="nav"
        className="bg-black"
        style={{ border: "1px solid rgba(0, 0, 255, 0.4)" }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center rounded-full overflow-hidden">
                <img
                  alt="Your Company"
                  src="././Logo.png"
                  className="h-8 w-8 object-cover"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="relative group rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onMouseEnter={() =>
                        handleMouseEnter(item.name.toLowerCase())
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="././profile.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                  <Link
  to="/profile"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
  Your Profile
</Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                  <Link
  to="/signout"
  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
  Sign out
</Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {activePage && (
        <div
          className="preview-overlay overflow-x-auto"
          onMouseEnter={handlePreviewMouseEnter}
          onMouseLeave={handlePreviewMouseLeave}
        >
          <div
            className="preview-content"
            onMouseEnter={handlePreviewMouseEnter}
            onMouseLeave={handlePreviewMouseLeave}
          >
            {renderPreviewComponent()}
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./index.css"; // Import your CSS file

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-expoBold text-main-text"
      >
        <a
          href="#"
          className="flex items-center hover:text-main-hover transition-colors"
        >
          احنا مين؟
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-expoBold text-main-text"
      >
        <a
          href="#"
          className="flex items-center hover:text-main-hover transition-colors"
        >
          الخدمات
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-expoBold text-main-text"
      >
        <a
          href="#"
          className="flex items-center hover:text-main-hover transition-colors"
        >
          تواصل معانا
        </a>
      </Typography>
    </ul>
  );
}

function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-screen-xl px-6 py-3 font-expoBold bg-main bg-opacity-1 text-main-text  border-transparent shadow-none"
      dir="rtl"
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-expoBold"
        >
          Venko Media
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          aria-label={openNav ? "Close menu" : "Open menu"}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

function NavBar() {
  return (
    <div
      style={{ position: "sticky", top: "0", zIndex: "50" }}
      className="bg-main w-full"
    >
      <NavbarSimple />
    </div>
  );
}

export default NavBar;

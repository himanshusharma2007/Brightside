import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const StyledDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
      backgroundColor: "#f3f4f6", // Replace with your desired color
      color: "#4b5563", // Replace with your desired text color
    },
  });

  const drawerContent = (
    <div className="w-[70vw] sm:w-[45vw] ">
      <div className="flex justify-end items-center px-4 py-2   ">
        <IconButton
          aria-label="close drawer"
          onClick={toggleDrawer(false)}
          edge="end"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <List className="">
        <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
          <ListItemText primary="Home" className="hover:text-teal-500" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/staff"
          onClick={toggleDrawer(false)}
          className="text-teal-500 bg-red-500"
        >
          <ListItemText className="hover:text-teal-500" primary="Our Staff" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/news"
          onClick={toggleDrawer(false)}
        >
          <ListItemText className="hover:text-teal-500" primary="News" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/gallery"
          onClick={toggleDrawer(false)}
        >
          <ListItemText className="hover:text-teal-500" primary="Gallery" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          onClick={toggleDrawer(false)}
        >
          <ListItemText className="hover:text-teal-500" primary="About" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={toggleDrawer(false)}
        >
          <ListItemText className="hover:text-teal-500"  primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-40 w-full">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl text-gray-800">
            <Link to="/">Brightside</Link>
          </div>
          <div className="header-right flex flex-row-reverse md:flex-row">
            <button
              className="md:hidden ml-3 text-gray-800 hover:text-gray-600  focus:outline-none"
              onClick={toggleDrawer(true)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <StyledDrawer
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </StyledDrawer>
            <nav className="hidden md:flex md:items-center md:space-x-1  ">
              <Link
                to="/"
                className="block md:inline-block text-gray-800 hover:text-gray-600 hover:bg-gray-100 py-2 px-4"
              >
                Home
              </Link>
              <Link
                to="/staff"
                className="block hover:bg-gray-100 md:inline-block text-gray-800 hover:text-gray-600 py-2 px-4"
              >
                Our Staff
              </Link>
              <Link
                to="/news"
                className="block hover:bg-gray-100 md:inline-block text-gray-800 hover:text-gray-600 py-2 px-4"
              >
                News
              </Link>
              <Link
                to="/gallery"
                className="block hover:bg-gray-100 md:inline-block text-gray-800 hover:text-gray-600 py-2 px-4"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="block hover:bg-gray-100 md:inline-block text-gray-800 hover:text-gray-600 py-2 px-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block hover:bg-gray-100 md:inline-block text-gray-800 hover:text-gray-600 py-2 px-4"
              >
                Contact
              </Link>
            </nav>
            <Link to="/register">
              <button className="bg-teal-700 text-white p-3 px-5 rounded-full hover:bg-teal-600 cursor-pointerc text-sm ml-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

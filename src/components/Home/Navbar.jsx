import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { toast } from "react-toastify";
import { Avatar } from "@mui/material";
const Navbar = () => {
  const [width, setWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutModal = () => {
    setAnchorEl(null);
    setModal(true);
  };
  const logoutHandeler = async () => {
    setModal(false);
    const response = await fetch("https://mosho.onrender.com/api/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: localStorage.getItem("refresh_token") }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    const data = await response.json();
    toast.success(data.status);
    navigate("/");
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 1000) {
    return (
      <>
        <div className="bg-[#23222a] text-white flex flex-row items-center justify-between py-3 px-10">
          <div className="flex flex-row items-center">
            <img src="/assets/logo.png" alt="logo" width="50px" />
            <h1 className="ml-2 font-semibold">The Mosho</h1>
          </div>
          <div className="flex flex-row items-center text-[#c9c9c9]">
            <Link to="/" className="mx-5">
              Home
            </Link>
            <Link to="/restaurants" className="mx-5">
              Restaurants
            </Link>
            <Link to="/offers" className="mx-5">
              Offers
            </Link>
            <Link to="/about-us" className="mx-5">
              About Us
            </Link>
            <Link to="/contact-us" className="mx-5">
              Contact Us
            </Link>
            <div className="mx-5 p-3 bg-white w-[45px] rounded-full">
              <img src="/assets/cart.svg" alt="cart" width="25px" />
            </div>
            {/* <button className="bg-[#ff0202] px-5 py-3 rounded-3xl text-white">Register Now</button> */}
            {!localStorage.getItem("token") ? (
              <Link to={"/register"} className="bg-[#ff0202] px-5 py-3 rounded-3xl text-white">
                Register Now
              </Link>
            ) : (
              <div className="after_login">
                <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                  <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#ff0202" }}>
                    {(localStorage.getItem("username") && localStorage.getItem("username").slice(0, 1)) || "U"}
                    {}
                  </Avatar>
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={logoutModal}>Logout</MenuItem>
                </Menu>
                <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
                  <p style={{ color: "#000" }}>Are You Sure You want to logout?</p>
                  <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
                    Logout
                  </button>
                  <button style={{ backgroundColor: "#047aed" }} onClick={() => setModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto relative">
        <div className="flex flex-row justify-between items-center my-3 mx-5 text-black">
          <div className="flex flex-row items-center">
            <img src="/assets/food.png" alt="logo" width="38px" />
            <h1 className="ml-2 font-semibold">Food Gate</h1>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src="/assets/menu.png" alt="menu-icon" width={30} height={30} />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center text-black pb-5">
            <Link to="/" className="mx-5">
              Home
            </Link>
            <Link to="/restaurants" className="mx-5">
              Restaurants
            </Link>
            <Link to="/offers" className="mx-5">
              Offers
            </Link>
            <Link to="/about-us" className="mx-5">
              About Us
            </Link>
            <Link to="/contact-us" className="mx-5">
              Contact Us
            </Link>

            <div className="flex flex-row items-center mt-5">
              <div className="mx-5 p-3 bg-white w-[45px] rounded-full">
                <img src="/assets/cart.svg" alt="cart" width="25px" />
              </div>
              {/* <button className="bg-[#ff0202] px-5 py-3 rounded-3xl text-white">Register Now</button> */}
              {!localStorage.getItem("token") ? (
                <Link to={"/register"} className="bg-[#ff0202] px-5 py-3 rounded-3xl text-white">
                  Register Now
                </Link>
              ) : (
                <div className="after_login">
                  <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                    <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#ff0202" }}>
                      {(localStorage.getItem("username") && localStorage.getItem("username").slice(0, 1)) || "U"}
                      {}
                    </Avatar>
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={logoutModal}>Logout</MenuItem>
                  </Menu>
                  <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
                    <p style={{ color: "#000" }}>Are You Sure You want to logout?</p>
                    <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
                      Logout
                    </button>
                    <button style={{ backgroundColor: "#047aed" }} onClick={() => setModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

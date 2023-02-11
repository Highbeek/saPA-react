import React from "react";
import "./General.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import Discover from "./Discover";
import SignIn from "./SignIn";
import ErrorPage from "./ErrorPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Home from "./Home";
// import SearchIcon from "@mui/icons-material/Search";

const General = () => {
  return (
    <>
      <Router>
        <nav>
          <ul className="Navbar">
            <li className="home">
              <Link className="nav-links" to="/">
                {" "}
                <span className="navbar-brand">
                  {<PeopleAltIcon style={{ fontSize: "38px" }} />} SAPA
                </span>
                {/* <div className="header__search">
                  <SearchIcon />
                  <input type="text" />
                </div> */}
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/Discover">
                Discover
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/HowItWorks">
                How It Works
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-links" to="/SignIn ">
                Sign In
                <span className="btn">end Sapa</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default General;

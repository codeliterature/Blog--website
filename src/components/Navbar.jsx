import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    let location = useLocation();
  return (
    <nav className="p-2 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide text-secondary">CL Blogs</h1>
      
      <div className="flex space-x-2">
        <ul className="flex space-x-2 items-center">
          <Link className={location.pathname == "/" ? "underline decoration-secondary": ""} to="/">Home</Link>
          <Link to="/about" className={location.pathname == "/about" ? "underline decoration-secondary": ""}>About</Link>
          <Link to="/blogs" className={location.pathname == "/blogs" ? "underline decoration-secondary": ""}>Blogs</Link>
        </ul>
        <button className="px-2 py-1 border border-secondary rounded"><Link to="/">Sign Up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;

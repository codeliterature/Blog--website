import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Drawer = () => {
  const [drawer, toggleDrawer] = useState(false);

  return (
    <nav className="py-2 px-4 flex items-center justify-center">
      <h1 className="text-2xl font-bold tracking-wide text-secondary">
        CL Blogs
      </h1>

      <button
        className="px-2 absolute top-2 left-2 text-3xl text-secondary "
        onClick={() => toggleDrawer(!drawer)}
      >
        {drawer ? 
        <FontAwesomeIcon icon={faXmark} />
        
        :<FontAwesomeIcon icon={faBars} />}      </button>
      <AnimatePresence>
        {drawer && (
          <motion.div
            className="border border-white h-[55vh] w-[70%] fixed top-20 flex flex-col items-center justify-center space-y-14  bg-white/20 rounded-lg backdrop-blur-md z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.125 }}
          >
            <div className="space-y-3">
              <button className=" px-2 py-1 border border-secondary rounded" onClick={() => toggleDrawer(!drawer)}><Link to="/">Sign up</Link></button>
              {/* <div>
                <img src="" alt="" />
                <p></p>
              </div> */}

              <ul className="flex flex-col items-center space-y-2 text-2xl">
                <Link className={location.pathname == "/" ?"underline decoration-secondary": ""} to="/" onClick={() => toggleDrawer(!drawer)}>Home</Link>
                
<Link className={location.pathname == "/about" ? "underline decoration-secondary" : ""}  to="/about" onClick={() => toggleDrawer(!drawer)}>About</Link>
                
                <Link className={location.pathname == "/blogs" ? "underline decoration-secondary" : ""}  to="/blogs" onClick={() => toggleDrawer(!drawer)}>Blogs</Link>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Drawer;

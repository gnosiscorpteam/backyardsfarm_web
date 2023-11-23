import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
    const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = event => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  
    return(
        <div className="overflow-y-scroll h-[100vh]" onScroll={(e) => handleScroll(e)}>
            <Navbar scrollTop = {scrollTop} />
            <div className="">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
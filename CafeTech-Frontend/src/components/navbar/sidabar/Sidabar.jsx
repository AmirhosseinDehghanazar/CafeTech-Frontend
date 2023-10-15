import React, { useEffect, useRef } from "react";
import "./sidebar.css";

const Sidabar = ({ sidebar, closeSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  }

  return (
    // sidebar parent checks for sidebar state
    <div
      ref={sidebarRef}
      id="sidebar"
      className={
        sidebar
          ? "primary-navigation sidebar-open"
          : "primary-navigation sidebar-close"
      }
    >
      <button onClick={closeSidebar}>close</button>
      <div>
        <a className="link-hover" href="#">
          صفحه اصلی
        </a>
      </div>

      {/* this one needs dropdown(below) */}
      <div>
        <a className="transition-all hover:text-cyan-600" href="#">
          رویدادها
        </a>
      </div>
      {/* this dropdown link similar to the
     navbar but this on is onClick that one onHover*/}

      <div>
        <a className="link-hover" href="#">
          درباره‌ما
        </a>
      </div>
      <div>
        <a className="link-hover" href="#">
          تماس با ما
        </a>
      </div>
      <div>
        <a className="link-hover" href="#">
          همکاری با ما
        </a>
      </div>
    </div>
  );
};

export default Sidabar;

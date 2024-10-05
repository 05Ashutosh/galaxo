import { Outlet } from "react-router-dom";
import { GalaxoNavbarComponent } from "./Navbar";
import GalFooter from "./GalFooter";
import "../style/layout.css";
export function Layout() {
  return (
    <div className="layout-container">
      {/* Navbar will always be on top */}
      <GalaxoNavbarComponent />

      {/* Add padding to avoid content overlapping with the navbar */}
      <div className="content-container">
        <Outlet />
      </div>

      {/* Footer will always be at the bottom */}
      <GalFooter />
    </div>
  );
}

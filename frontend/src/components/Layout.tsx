import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  return (
    <>
        <CustomCursor />
        <Navbar />
            <Outlet />
        <Footer />
    </>
  )
}
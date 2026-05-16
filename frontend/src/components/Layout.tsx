import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <>
        <Toaster />
        <CustomCursor />
        <Navbar />
            <Outlet />
        <Footer />
    </>
  )
}
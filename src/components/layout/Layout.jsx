import { Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import Contact from "../contact/Contact";


function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout;
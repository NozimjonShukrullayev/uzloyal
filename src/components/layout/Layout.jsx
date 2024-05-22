import { Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";


function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout;
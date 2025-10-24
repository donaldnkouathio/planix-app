import { Routes, Route } from "react-router-dom";
import Home from "/src/app/Home";
import Header from "/src/components/layouts/header";
import Footer from "/src/components/layouts/footer";
import Policy from "/src/app/policy";

function Layout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default Layout;

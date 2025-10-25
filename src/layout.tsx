import { Routes, Route } from "react-router-dom";
import Home from "/src/app/Home";
import Header from "/src/components/layouts/header";
import Footer from "/src/components/layouts/footer";
import Policy from "/src/app/policy";
import ScrollToTopButton from "/src/components/ui/scroll-top-button";

function Layout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>

      <ScrollToTopButton/>

      <Footer/>
    </>
  );
}

export default Layout;

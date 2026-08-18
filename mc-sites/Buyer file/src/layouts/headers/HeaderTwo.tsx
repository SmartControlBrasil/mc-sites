 
import { Link } from "react-router-dom";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";

export default function HeaderTwo() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  return (
    <>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header--2 header-style1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="assets/img/logo/logo-black.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper d-lg-none d-block">
                <div className="main-menu">
                  <nav id="mobile-menu">

                  </nav>
                </div>
              </div>
              <div className="social-white gap-xl-3 gap-2 d-md-flex d-none align-items-center">
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="header-right gap-xxl-4 gap-lg-4 gap-3 d-flex justify-content-end align-items-center">
                <div
                  className="header__hamburger border rounded-circle d-center fw-semibold text-white heading-font my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/bars.png" alt="icon" className="filter-white" />
                  </div>
                </div>
                <div className="d-sm-block d-none">
                  <Link to="/contact" className="common_btn common_btn-blacktheme text-nowrap">
                    download cv
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />


    </>
  )
}

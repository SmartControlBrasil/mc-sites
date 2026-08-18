 
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Navmenu from "./Navmenu";
import Offcanvas from "@/components/common/Offcanvas";
import { Link } from "react-router-dom";
import SearchArea from "@/components/common/SearchArea";

interface HeaderThreeProps { 
  style_2?: boolean
}

export default function HeaderThree({ style_2 }: HeaderThreeProps) {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header-style1 ${sticky ? "sticky" : ""} ${style_2 ? "bg-black" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="assets/img/logo/logo.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper d-none d-xl-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a style={{cursor: "pointer"}} onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <button type="button" className="common_btn d-sm-flex d-none text-nowrap">
                  download cv
                  <span className="icon_wrapper">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/bars.png" alt="icon" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />


    </>
  )
}

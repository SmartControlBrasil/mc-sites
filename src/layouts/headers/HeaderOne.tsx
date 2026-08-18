
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";
import SearchArea from "@/components/common/SearchArea";
import mcsites_menu_data from "@/data/menu-data-mcsites";
import { Link } from "react-router-dom";

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header id="header-sticky" className={`header-section header--1 header-style1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <span className="text-white fw-bold fs-4 heading-font text-uppercase">MC-SITES</span>
              </Link>
              <div className="header-right gap-xxl-4 gap-lg-3 gap-2 d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="search-trigger d-center rounded-circle search-icon border-0 bg-transparent p-0"
                  aria-label="Abrir busca"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <Link
                  to="/contact"
                  className="fs-seven fw-semibold text-white heading-font text-nowrap d-none d-md-inline-flex align-items-center gap-2"
                >
                  <i className="fal fa-envelope"></i>
                  Fale conosco
                </Link>
                <div className="header__hamburger d-flex align-items-center gap-2 fs-seven fw-semibold text-white heading-font my-auto">
                  <button
                    type="button"
                    className="sidebar__toggle border-0 bg-transparent p-0 d-flex align-items-center"
                    onClick={() => setOffCanvasOpen(true)}
                    aria-label="Abrir menu"
                  >
                    <img src="assets/img/icon/bars.png" alt="" className="filter-white" />
                  </button>
                  MENU
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas
        offCanvasOpen={offCanvasOpen}
        setOffCanvasOpen={setOffCanvasOpen}
        variant="mcsites"
        menuItems={mcsites_menu_data}
      />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
    </>
  );
}

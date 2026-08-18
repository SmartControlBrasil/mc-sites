 
import menu_data from "@/data/menu-data";
import type { MenuItem } from "@/types/menu_types";
import { Link } from "react-router-dom";
import { useState } from "react";

interface MobileMenuProps {
  items?: MenuItem[];
  onNavigate?: () => void;
}

export default function MobileMenu({ items = menu_data, onNavigate }: MobileMenuProps) {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const handleNavigate = () => {
    onNavigate?.();
  };

  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li
            className={`${item.has_dropdown ? "has-dropdown" : ""}  ${"is_home_menu" in item && item.is_home_menu ? "active menu-thumb" : ""} ${item.title === navTitle ? "active-dropdown" : ""}`}
            key={i}
          >
            {item.has_dropdown ? (
              <div className="d-flex align-items-center justify-content-between gap-2">
                <Link to={item.link ?? "#"} onClick={handleNavigate} className="flex-grow-1">
                  {item.title}
                </Link>
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 text-dark"
                  aria-expanded={navTitle === item.title}
                  aria-label={`Expandir ${item.title}`}
                  onClick={() => openMobileMenu(item.title)}
                >
                  <i className="fas fa-angle-down"></i>
                </button>
              </div>
            ) : (
              <Link to={item.link ?? "#"} onClick={handleNavigate}>
                {item.title}
              </Link>
            )}
            {"is_home_menu" in item && item.is_home_menu && item.sub_menus && (
              <ul className="submenu has-homemenu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                <li>
                  <div className="homemenu-items">
                    {item.sub_menus.map((sub_item, index) => (
                      <div key={index} className="homemenu">
                        <Link
                          to={sub_item.link ?? "#"}
                          className="homemenu-thumb d-center px-2"
                          onClick={handleNavigate}
                        >
                          <img src={sub_item.img} alt="img" />
                          <span className="demo-button d-center py-2 px-3 p1-bg">
                            <span className="white">{sub_item.title}</span>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
            {item.has_dropdown && !("is_home_menu" in item && item.is_home_menu) && (
              <ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none" }}>
                {item.sub_menus &&
                  item.sub_menus.map((sub_item, index) => (
                    <li key={index}>
                      <Link to={sub_item.link ?? "#"} onClick={handleNavigate}>
                        {sub_item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

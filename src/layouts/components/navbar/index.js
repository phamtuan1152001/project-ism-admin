import "./index.scss";
import "./responsive.scss";

import React, { useState, useEffect, Fragment } from "react";

/*Hooks*/
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { useMediaQuery } from "react-responsive";

/*Navigation*/
import navigation from "@src/navigation";

/*Components*/
import Switch from "@components/Switch";

/*Icon*/
import {
  TTLIcon,
  FBIcon,
  YoutubeIcon,
  TiktokIcon,
  HamburgerIcon,
} from "@src/assets/svg";

const Navbar = ({ data = {} }) => {
  const { t } = useTranslation();
  const { url } = useRouteMatch();
  const history = useHistory();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  /*State*/
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const logo = require("@assets/images/logo.svg").default;
  const logoMobile = require("@assets/images/logo.svg").default;

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setIsMounted(true);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  return (
    <Fragment>
      <header id="header">
        <div id="navbar" className="crake-nav top-header">
          <div className="container header">
            <Link to="/" className="navbar-brand desktop">
              <img src={logo} alt="logo" />
            </Link>
            <nav className="navbar navbar-expand-md navbar-top">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav nav ms-auto">
                  <li className="social-list">
                    <a
                      onClick={() =>
                        window.open(data?.link_TTL, "_blank").focus()
                      }
                      className="social-btn ttl"
                    >
                      <TTLIcon />
                    </a>
                    <a
                      onClick={() =>
                        window.open(data?.link_Facebook, "_blank").focus()
                      }
                      className="social-btn fb"
                    >
                      <FBIcon />
                    </a>
                    <a
                      onClick={() =>
                        window.open(data?.link_Youtube, "_blank").focus()
                      }
                      className="social-btn ytb"
                    >
                      <YoutubeIcon />
                    </a>
                    <a
                      className="social-btn tiktok"
                      onClick={() =>
                        window.open(data.link_Tictok, "_blank").focus()
                      }
                    >
                      <TiktokIcon />
                    </a>
                  </li>
                  <li>
                    <Link to="/danhgia5sao" className="btn-top btn-top-primary">
                      {t("MENU:rate5star")}
                    </Link>
                  </li>

                  <li>
                    {/* <a
                      className="btn-top btn-top-primary"
                      onClick={() =>
                        window.open(data.link_5PTB, "_blank").focus()
                      }
                    >
                      {t("MENU:5minutes")}
                    </a> */}

                    <Link to="/download" className="btn-top btn-top-primary">
                      {t("MENU:5minutes")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/buycourse"
                      className="btn-top btn-top-primary-fill"
                    >
                      {t("MENU:buyCourse")}
                    </Link>
                  </li>
                  <li>
                    <Switch />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div id="navbar" className="crake-nav light">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              {isTablet && (
                <div className="navbar-responsive tablet">
                  <Switch />
                  <Link to="/" className="navbar-brand tablet">
                    <img src={logoMobile} alt="logo" />
                  </Link>
                  <button
                    onClick={() => setVisible(!visible)}
                    className={`btn-opt ${visible ? "active" : ""}`}
                    type="button"
                  >
                    <div className="opt-icon">
                      <span className="hamburger-opt-icon">
                        <HamburgerIcon />
                      </span>
                      <span className="opt-text">MENU</span>
                    </div>
                  </button>
                </div>
              )}
              {isMobile && (
                <div className="navbar-responsive mobile">
                  <Link to="/" className="navbar-brand mobile">
                    <img src={logoMobile} alt="logo" />
                  </Link>
                  <div className="right">
                    <Switch />
                    <button
                      onClick={() => setVisible(!visible)}
                      className={`btn-opt ${visible ? "active" : ""}`}
                      type="button"
                    >
                      <div className="opt-icon mobile">
                        <HamburgerIcon />
                      </div>
                    </button>
                  </div>
                </div>
              )}

              <div
                className="collapse navbar-collapse navbar-desktop"
                id="navbarSupportedContent"
              >
                {navigation && navigation.length ? (
                  <ul className="navbar-nav nav ms-auto">
                    {navigation.map((item) => (
                      <li
                        className={`nav-item ${
                          item.to === url ? "active" : ""
                        }`}
                        key={item.id}
                        onClick={() => history.push(item.to)}
                      >
                        <Link className="nav-link nav-header-link" to={item.to}>
                          {item.titleI18n ? t(item.titleI18n) : item.title}
                        </Link>
                        {item.submenu && item.submenu.length ? (
                          <ul className="dropdown_menu">
                            {item.submenu.map((sub, index) => (
                              <li key={sub.id || `sub-${index}`}>
                                <Link to={sub.to}>
                                  {sub.titleI18n ? t(sub.titleI18n) : sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;

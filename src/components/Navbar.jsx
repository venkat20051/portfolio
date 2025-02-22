import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] fixed inset-0 z-20 menu ${toggle ? 'menu-open' : 'menu-close'
                } flex flex-col items-center justify-center`}
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <img
                  src={close}
                  alt="close"
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-6 items-center text-center mt-8">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                      } text-[36px] sm:text-[42px] font-bold font-arenq uppercase tracking-wide cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

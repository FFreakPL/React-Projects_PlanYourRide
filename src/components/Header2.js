import React from 'react';
import { useState, createContext, useContext } from "react";
import { auth, db, logout } from "./firebase";
import WeatherComponent from "./WeatherComponent";

function Header2() {
    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__logo"></div>
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                    <label htmlFor="menu__btn" className="menu__toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className="header__nav">
                        <li className="nav__element"><a href="#" className="nav__link">Zaplanuj Wyjazd</a></li>
                        <li className="nav__element"><a href="./dashboard" className="nav__link">Powrót</a></li>
                        <li className="nav__element"><a href="#" className="nav__link" onClick={logout}>Wyloguj</a></li>
                        {/*<button className="nav__link" onClick={logout}>*/}
                        {/*    Wyloguj</button>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header2;
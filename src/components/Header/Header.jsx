import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderItems from "./HeaderItems/HeaderItems";
import HeaderResponse from "./HeaderResponse/HeaderResponse";
import "./header.scss";

const Header = () => {
    const [scrollShow, setScrollShow] = useState(true);

    useEffect(() => {
        let scrollBefore = 0;
        window.addEventListener("scroll", () => {
            let scrollAfter = window.scrollY;
            if (scrollAfter < scrollBefore) {
                setScrollShow(true)
            }
            else {
                setScrollShow(false)
            }

            scrollBefore = scrollAfter;
        });
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Link to="/" className="header-inner_logo">
                        <h1 className="header-inner_logo_title">Cyber</h1>
                    </Link>
                    <HeaderItems />
                    <HeaderResponse />
                </div>
            </div>
        </header>
    );
}

export default Header;
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./headerItems.scss";

const HeaderItems = () => {

    const [lang, setLang] = useState("Русский")
    const [langShow, setLagnShow] = useState(false);

    const langRef = useRef();

    const changeLang = (newLang, tag) => {
        setLang(newLang)
        setLagnShow(false)
    }

    // document.addEventListener("click", (e) => {
    //     if (!e.path.includes(langRef.current)) {
    //         setLagnShow(false);
    //     }
    // });

    return (
        <div className="header-items">
            <ul className="header-items_block">
                <li ref={langRef}>
                    <button className="lang-btn" onClick={() => setLagnShow(prev => !prev)}>{lang}</button>
                    <ul className={langShow ? "lang_items active" : "lang_items"}>
                        <li><button onClick={() => changeLang("Uzbek", "uz")}>Uzbek</button></li>
                        <li><button onClick={() => changeLang("Русский", "ru")}>Русский</button></li>
                    </ul>
                </li>
            </ul>
            {/* <button className="login-btn" onClick={() => navigate("/login")}>
                Войти
            </button> */}
        </div>
    );
}

export default HeaderItems;

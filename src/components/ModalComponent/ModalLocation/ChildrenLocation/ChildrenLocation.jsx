import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../../modal.scss";

const ChildrenLocation = ({ children, childShow, setChildShow, setGetLocation, onCancel }) => {
    

    const handleLocation = (child) => {
        setGetLocation(child);
        setChildShow(false);
        onCancel();
    }

    // document.addEventListener('click', (e) => {
    //     const content = document.querySelector(".modal-content")
    //     if(!e.path.includes(content)){
    //         setChildShow(false);
    //     }
    // })

    return (

        <div className={childShow ? "modal-inner-content show": "modal-inner-content hide"}>

            <ul className="modal-items">
                        
                <li className="modal-item back" onClick={() => setChildShow(false)}>
                    <ArrowLeftOutlined className="modal-item__icon" />
                    <span className="modal-item__title">Назад</span>
                </li>
                {children &&
                    children.children.map(child => (
                        <li className="modal-item" key={child._id} onClick={() => handleLocation(child)}>
                            <span className="modal-item__title">
                                {child.name_ru}
                            </span>
                        </li>
                    ))
                }

            </ul>

        </div>

    );
};

export default ChildrenLocation;
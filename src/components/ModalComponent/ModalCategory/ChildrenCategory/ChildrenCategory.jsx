import React, { useEffect } from 'react';
import { ArrowLeftOutlined, RightOutlined } from '@ant-design/icons';
import "../../modal.scss";

const ChildrenCategory = ({ 
    children, childShow, 
    setChildShow, 
    handleCategory, onCancel  }) => {

    const clickCategory = (child) => {
        handleCategory(child);
        setChildShow(false);
        onCancel();
    }

    // document.addEventListener('click', (e) => {
    //     const content = document.querySelector(".modal-content")
    //     if(!e.path.includes(content)){
    //         setChildShow(false);
    //     }
    // });

    return (
        <div className={childShow ? "modal-inner-content show": "modal-inner-content hide"}>

            <ul className="modal-items">

                <li className="modal-item back sticky" onClick={() => setChildShow(false)}>
                    <ArrowLeftOutlined className="modal-item__icon" />
                    <span className="modal-item__title">{children.name_ru}</span>
                </li>
                {children.children && children.children.map(child => (
                    <li className="modal-item" key={child.id} onClick={() => clickCategory(child)}>
                        <span className="modal-item__title">
                            {child.name_ru}
                        </span>
                        {child.children.length > 0 && <RightOutlined className="modal-item__icon" />}
                    </li>
                ))}

            </ul>   

        </div>
    )
}

export default ChildrenCategory
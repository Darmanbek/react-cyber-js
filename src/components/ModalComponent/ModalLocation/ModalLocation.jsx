import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import ChildrenLocation from "./ChildrenLocation/ChildrenLocation";
import "../modal.scss";

const ModalLocation = ({ visible, onCancel, setSelectLocation }) => {
    const { locations } = useSelector(state => state.locations);
    const [getLocation, setGetLocation] = useState(null);
    const [children, setChildren] = useState(null);
    const [childShow, setChildShow] = useState(false);

    const handleChildren = (location) => {
        setChildren(location);
        setChildShow(true);
    }

    const allRegions = {
        id: "624d7e045f256bs3218a1e33",
        name_uz: "Hamma regionlar",
        name_oz: "Хамма регионлар",
        name_ru: "Все регионы",
        children: [],
    }

    const handleAllRegions = () => {
        setGetLocation(allRegions);
        onCancel();
    }

    useEffect(() => {   
        if(getLocation){
            if(getLocation.province) {
                const reg = locations.find(item => item.id === getLocation.province).name_ru;
                const child = getLocation.name_ru;
                setSelectLocation(`${reg} / ${child}`);
            }else{
                setSelectLocation(getLocation.name_ru);
            }
        }
    }, [getLocation]);

    return (
        <Modal
            className="modal"
            title="Выберите регион"
            open={visible}
            onCancel={onCancel}
        >

            <div className={childShow ? "modal-content hide" : "modal-content show"}>

                <ul className="modal-items">
                    <li className="modal-item all-regions" onClick={handleAllRegions}><span className="modal-item__title">{allRegions.name_ru}</span></li>
                    {locations && locations.map(location => (
                        <li className="modal-item" key={location.id} onClick={() => handleChildren(location)}>
                            
                            <span className="modal-item__title">{location.name_ru}</span>
                            <RightOutlined className="modal-item__icon" />

                        </li>
                    ))}
                </ul>

            </div>

            <ChildrenLocation children={children} childShow={childShow} setChildShow={setChildShow} setGetLocation={setGetLocation} onCancel={onCancel}/>

        </Modal>
    );
};

export default ModalLocation;
import React, { useEffect, useRef, useState } from "react";
import FormItemContact from "./FormItemContact/FormItemContact";
import FormItemInf from "./FormItemInf/FormItemInf";
import FormItemDesc from "./FormItemDesc/FormItemDesc";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import { postProducts } from "../../store/productSlice/products";
import "./creatorCard.scss";

const CreatorCard = ({ setShowAlert }) => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const [selectCategory, setSelectCategory] = useState("");
    const [selectLocation, setSelectLocation] = useState("");


    const handleSubmit = (values) => {
        dispatch(postProducts(values));
        formRef.current?.resetFields()
        setShowAlert(true)
    }

    useEffect(() => {
        formRef.current?.setFieldsValue({
            productCategory: selectCategory,
            contactRegion: selectLocation
        })
    }, [selectCategory, selectLocation])
    return (
        <div className="declaration-block">
            <h1 className="declaration-block_title">Создать объявление</h1>
            <Form ref={formRef} className="form" name="product" layout="vertical" onFinish={handleSubmit}>
                <FormItemInf setSelectCategory={setSelectCategory}/>
                <FormItemContact setSelectLocation={setSelectLocation}/>
                <FormItemDesc />
                <Form.Item className="form-item">
                    <div className="submit-button">
                        <Button type="primary" htmlType="submit" className="form-btn">Опубликовать объявление</Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreatorCard;
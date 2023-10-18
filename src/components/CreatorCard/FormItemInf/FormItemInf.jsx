import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";
import { setCategoryValue, setRouterValue, setVisibleCategory } from "../../../store/categorySlice/categories";
import ModalCategory from "../../ModalComponent/ModalCategory/ModalCategory";
import { rules } from "../validateRules"
import "./formItemInf.scss";

const { Option } = Select;

const FormItemInf = ({ setSelectCategory }) => {
    const dispatch = useDispatch();
    
    
    
    const showModal = () => {
        dispatch(setVisibleCategory(true));
        dispatch(setRouterValue(false));
        dispatch(setCategoryValue(true));
    }

    return (
        <div className="form-item">
            <h1>Основная информация</h1>
            <Form.Item label="Название объявления" name="productTitle" rules={[rules]} className="form-control">
                <Input size="large" />
            </Form.Item>
            <div className="form-control grid">
                <Form.Item label="Цена" name="productPriceNumber" rules={[rules]} className="form-control-item">
                    <InputNumber className="number-price" size="large"/>
                </Form.Item>
                <Form.Item label="Валюта" name="productPriceType" rules={[rules]} className="form-control-item">
                    <Select className="select-price" name="price" size="large" placeholder="Выберите валюту">
                        <Option value="сум">суммы</Option>
                        <Option value="руб">рубли</Option>
                        <Option value="$">доллары</Option>
                    </Select>
                </Form.Item>
            </div>
            <ModalCategory setSelectCategory={setSelectCategory} />
            <Form.Item label="Категория"  name="productCategory" rules={[rules]} className="form-control">
                <Input
                size="large"
                onClick={showModal}
                />
            </Form.Item>
        </div>
    );
};

export default FormItemInf;

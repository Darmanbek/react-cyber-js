import React from "react";
import { Input, Form } from "antd";
import { rules } from "../validateRules";

const { TextArea } = Input;

const FormItemDesc = () => {
    return (
        <div className="form-item">
            <h1>Контактная информация</h1>
            <Form.Item label="Напишите информацию объявления здесь" name="productDesc" rules={[rules]} className="form-control">
                <TextArea style={{overflow: "hidden", minWidth: "100%"}} size="large"/>
            </Form.Item>
        </div>
    );
};

export default FormItemDesc;

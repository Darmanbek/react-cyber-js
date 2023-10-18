import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { rules } from "../validateRules";
import "./formItemImg.scss";
import { Form, Input } from "antd";

const FormItemImg = () => {
    return (
        <div className="form-item">
            <h1>Изображения</h1>
            <Form.Item className="form-item-img" name="productImage" rules={[rules]}>
                <Input type="file" className="file-input" prefix={<CloudUploadOutlined className="form-icon-upload" />}/>
            </Form.Item>
            
        </div>
    );
};

export default FormItemImg;

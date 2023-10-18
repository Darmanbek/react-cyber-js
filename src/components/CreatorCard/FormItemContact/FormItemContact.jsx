import react, { useCallback, useState } from "react";
import { Form, Input, InputNumber, Select } from "antd"
import ModalLocation from "../../ModalComponent/ModalLocation/ModalLocation";
import { rules } from "../validateRules";
import "./formItemContact.scss";

const FormItemContact = ({ setSelectLocation }) => {
    const [modalVisible, setModalVisible] = useState(false);


    const showModal = useCallback(() => {
        setModalVisible(true);
    } , [modalVisible])

    const handleCancel = useCallback(() => {
        setModalVisible(false);
    }, [modalVisible])

    return (
        <div className="form-item">
            <h1>Контактные данные</h1>
            <div className="form-control grid">
                <Form.Item label="Имя" name="contactName" rules={[rules]} className="form-control-item">
                    <Input size="large" />
                </Form.Item>
                <Form.Item label="Фамилия" name="contactSurname" rules={[rules]} className="form-control-item">
                    <Input size="large" />
                </Form.Item>
            </div>

            <ModalLocation 
                onCancel={handleCancel}
                visible={modalVisible}
                setSelectLocation={setSelectLocation}
            />
            <div className="form-control grid">
                <Form.Item label="Регион" name="contactRegion" rules={[rules]} className="form-control-item">
                    <Input 
                    size="large"
                    onClick={showModal}
                     />
                </Form.Item>
                <Form.Item label="Почта" name="contactAccount" rules={[rules]} className="form-control-item">
                    <Input size="large" placeholder="example@mail.com"/>
                </Form.Item>
            </div>

            <div className="form-control grid">
                <Form.Item label="Телефон" name="contactNumber" rules={[rules]} className="form-control-item">
                    <InputNumber className="phone-number"
                    placeholder="+998901234567" size="large"/>
                </Form.Item>
            </div>
        </div>
    )
}

export default FormItemContact;
import React, { useEffect, useState } from "react";
import CreatorCard from "../../components/CreatorCard/CreatorCard"
import { Alert } from "antd";
import "./adminPage.scss";

const AdminPage = () => {
    const [showAlert, setShowAlert] = useState(false)
    
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
            clearTimeout()
        }
    }, [showAlert])
    return (
        <>
            <Alert 
                className={`success-alert ${showAlert && "open"}`}
                message="Операция успешно выполнена!"
                type="success" showIcon />
            <secton className="section-admin">
                
                <div className="container">
                    <div className="admin-inner">
                        <CreatorCard setShowAlert={setShowAlert}/>
                    </div>
                </div>
            </secton>      
        </>
        
    );
};

export default AdminPage;

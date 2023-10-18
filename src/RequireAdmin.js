import React from 'react';
import { LoginPage, AdminPage } from "./pages";

const RequireAdmin = ({ isAdmin, setIsAdmin, setIsUser }) => {
    
    if (isAdmin) {
        return <AdminPage />;
    } else {
        return <LoginPage setIsAdmin={setIsAdmin} setIsUser={setIsUser} />; //
    }
}

export default RequireAdmin;
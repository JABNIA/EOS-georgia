import { Outlet } from "react-router";
import "../../styles/admin.scss";
import AdminMenu from "./Components/AdminMenu";

function Admin() {
    return (
        <div className="admin-wrapper">
            <AdminMenu />
            <Outlet />
        </div>
    );
}

export default Admin;

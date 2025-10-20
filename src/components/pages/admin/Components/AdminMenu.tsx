import { Link } from "react-router-dom";

function AdminMenu() {
    return (
        <ul className="admin-menu">
            <li>
                <Link to="/admin">Admin Panel</Link>
            </li>
            <li>
                <Link to="/admin/add-product">add Product</Link>
            </li>
            <li>
                <Link to="/admin/manage-products">Manage Products</Link>
            </li>
        </ul>
    );
}

export default AdminMenu;

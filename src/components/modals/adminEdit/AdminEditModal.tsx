import AdminEditForm from "./components/adminEditForm";

function AdminEditModal() {
    return (
        <div onClick={(e) => e.stopPropagation() }>
            <AdminEditForm />
        </div>
    );
}

export default AdminEditModal;

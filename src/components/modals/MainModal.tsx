import { useDispatch, useSelector } from "react-redux";
import { ModalCollection } from "../../ModalNames";
import AdminEditModal from "./AdminEditModal";
import type { RootState } from "../../store/store";
import "../styles/modalStyles.scss"
import { closeModal } from "../../store/reducers/modalReducer/modals";

function MainModal() {
    const modalType = useSelector((state: RootState) => state.Modal.type )
    const dispatch = useDispatch()

    const whichModal = () => {
        switch (modalType) {
            case ModalCollection.adminEditProduct:
                return <AdminEditModal />;
            default:
                return null;
        }
    };

    const handleCloseModal = () => {
        dispatch(closeModal())
    }


    console.log(ModalCollection.adminEditProduct, modalType)
    return <div className="modal-wrapper"
        onClick={handleCloseModal}
    >
        {
            whichModal()
        }
        </div>;
}

export default MainModal;

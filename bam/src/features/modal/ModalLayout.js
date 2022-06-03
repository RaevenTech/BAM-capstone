import Register from "../forms/Register";
import RegisterListing from "../forms/RegisterListing";
import styles from "./ModalLayout.module.css";

const ModalLayout = () => {
    return (
        <div className={styles.modal_btns}>
            <Register />
            <RegisterListing />
        </div>
    );
};

export default ModalLayout;

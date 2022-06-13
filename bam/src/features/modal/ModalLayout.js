import Register from "../forms/Register";

import styles from "./ModalLayout.module.css";

const ModalLayout = () => {
    return (
        <div className={styles.modal_btns}>
            <Register />
        </div>
    );
};

export default ModalLayout;

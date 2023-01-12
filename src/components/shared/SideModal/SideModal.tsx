import React from 'react';
import { IModalRef, Modal } from "forging-react";
import styles from './sidemodal.module.css';

const SideModal = React.forwardRef<IModalRef, React.PropsWithChildren<{}>>((props, ref) => {
    
    return (
        <Modal ref={ref} className={styles.container} animationDirection='right'>

        </Modal>
    )
});

export default SideModal;

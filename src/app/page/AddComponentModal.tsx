import { IModalRef, Modal } from "forging-react";
import React from "react";

const AddComponentModal = React.forwardRef<IModalRef>((props, ref) => {
    return (
        <Modal ref={ref}>
            <div> {/* List */}

            </div>
            <div> {/* field mapping */}

            </div>
        </Modal>
    )
});

export default AddComponentModal;
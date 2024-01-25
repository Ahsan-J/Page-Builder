import { IModalRef, Modal } from "forging-react";
import React, { useRef } from "react";
import { getAllRegisteredComponent } from './registrations';

const AddComponentModal = React.forwardRef<IModalRef>((props, ref) => {
    const registeredComponents = useRef(getAllRegisteredComponent()).current;
    console.log(registeredComponents);
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
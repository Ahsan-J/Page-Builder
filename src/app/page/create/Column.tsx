import { Button, IModalRef } from "forging-react";
import { useRef } from "react";
import AddComponentModal from "./AddComponentModal";

const Column = () => {
    const modalRef = useRef<IModalRef>(null);
    const onAddComponent = () => modalRef.current?.showModal(true);

    return (
        <>
            <Button type="light" block leftIcon="plus-circle" className="!h-20 !border-dark" onClick={onAddComponent}>

            </Button>
            <AddComponentModal ref={modalRef} />
        </>
    )
}

export default Column;
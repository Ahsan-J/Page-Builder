import { Button, IModalRef } from "forging-react"
import { useRef } from "react";
import AddComponentModal from "../AddComponentModal";

const PageRow = () => {
    const modalRef = useRef<IModalRef>(null);

    const onAddComponent = () => {
        modalRef.current?.showModal(true);
    };
    
    return (
        <div>
            <div className="flex flex-row gap-4 p-4 justify-end w-full">
                <Button type="light" leftIcon={"layout-wtf"} />
                <Button type="light" leftIcon={"gear-fill"} />
            </div>
            <Button type="light" block leftIcon="plus-circle" className="!h-20 !border-dark" onClick={onAddComponent}>

            </Button>
            <AddComponentModal ref={modalRef} />
        </div>
    )
}

export default PageRow;
import { Button, Icon, IModalRef, Modal } from 'forging-react';
import React, { useRef } from 'react';
import SideModal from '../shared/SideModal/SideModal';

const ComponentSelector = React.memo(() => {
    const modalRef = useRef<IModalRef>(null);

    return (
        <React.Fragment>
            <Button className='w-100' size='large' outline={true} onClick={() => modalRef.current?.showModal(true)}>
                <Icon name='plus' width="1.5rem" height="1.5rem" />
            </Button>
            <SideModal ref={modalRef}>

            </SideModal>
        </React.Fragment>
    )
});

export default ComponentSelector;
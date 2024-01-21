import { Button, Card, Icon, IModalRef, Input, Modal } from 'forging-react';
import React, { useMemo, useRef, useState } from 'react';
import ComponentSelector from '../ComponentSelector';

const PageGenerator = React.memo(() => {
    const [rows, setRows] = useState<Array<string>>([]);

    const onAddRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        setRows(r => {
            const t = Object.assign([], r);
            return t;
        })
    }

    return (
        <React.Fragment>
            {rows.map(id => <Row key={id} />)}
            <Button title="Add Row" htmlType='button' className='p-4 w-100' outline={true} size="large" onClick={onAddRow}>
                <Icon width="2rem" height="2rem" name='plus' />
            </Button>
        </React.Fragment>
    )
});

const Row = React.memo(() => {
    const metaModalRef = useRef<IModalRef>(null);
    const [layout, setLayout] = useState<string>("12");
    
    const rowHeader = useMemo(() => {
        return (
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <Input placeholder='Title'/>
                <div>
                    <Button htmlType='button' type='link' onClick={() => metaModalRef.current?.showModal(true)}>
                        <Icon name="columns" />
                    </Button>
                    <Button htmlType='button' type='link' onClick={() => metaModalRef.current?.showModal(true)}>
                        <Icon name="nut"  />
                    </Button>
                </div>
            </div>
        )
    }, [])

    return (
        <Card className='my-2 mx-1' header={rowHeader}>
            <Modal ref={metaModalRef}>

            </Modal>
            {
                layout.split("+").map(l => {
                    return (
                        <div key={l} className={`col-md-${l}`}>
                            <ComponentSelector />
                        </div>
                    )
                })
            }
        </Card>
    )
})

export default PageGenerator;
import React, { useMemo } from "react";
import { IRow, IAttributes } from "../../../model/page_builder";
import Cell from "../Cell";
import styles from "./row.module.css"

type propType = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    row: IRow;
    pageIndex?: number;
    parentAttribute?: {[key in string]: IAttributes }
}

const Row = React.memo<propType>(props => {

    // if (props.row.isDisabled == true) {
    //     return null;
    // }

    const layouts = useMemo(() => props.row.layout.split("+"), [props.row]);
    
    const attributes = useMemo(() => {
        const parentAttribute = {
            ...props.parentAttribute,
            row: {
                ...(props.parentAttribute?.row),
                general: props.row.attributes.general,
                style: props.row.attributes.style
            }
        }
        return parentAttribute;
    }, [props.parentAttribute, props.row]);

    const renderedRows = useMemo(() => {
        return props.row.cells.map((cell, index: number) =>{
            return (
                <Cell key={cell.id} cell={cell} layout={layouts[index]} parentAttribute={attributes.row} />
            )
        })
    }, [props.row, layouts, attributes]);

    if (!props.row) {
        return null
    }

    return (
        <div className={`row ${styles.container}`}>
            {renderedRows}
        </div>
    )
})

export default Row;
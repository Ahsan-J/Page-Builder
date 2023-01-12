import { css, StyleSheet } from "forging-react";
import React, { useMemo } from "react";
import { ICell, IAttributes } from "../../../model/page_builder";
import Component from "../Component";
import Row from "../Row";
import styles from './cell.module.css';

type propType = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    cell: ICell;
    layout: string;
    parentAttribute?: IAttributes;
}

const Cell = React.memo<propType>(props => {
    const { layout = "12" } = props;

    let general: IAttributes['general'] = {};
    let visibilityValue = true;

    // if (cell.isDisabled == true) {
    //     return null;
    // }

    if (props.cell.attributes?.general) {
        general = props.cell.attributes.general;

        // if (!validate(this.props.deviceType) && general.isVisibleOnDesktop == false) {
        //     return null
        // }

        // if (_.toLower(this.props.deviceType) == "mobile" && general.isVisibleOnMobile == false) {
        //     return null;
        // }

        // if (_.toLower(this.props.deviceType) == "tablet" && general.isVisibleOnTablet == false) {
        //     return null;
        // }
    }

    const style = useMemo(() => {
        if (!props.cell.attributes?.style) return "";
        const { style: _style } = props.cell.attributes;

        let cell: React.CSSProperties = {
            padding: _style.padding || "0 15px",
            margin: _style.margin || "0",
            backgroundColor: _style.backgroundColor || "transparent",
        }

        if (_style.backgroundImage) {
            cell = {
                ...cell,
                backgroundRepeat: 'no-repeat',
                backgroundImage: _style.backgroundImage,
                backgroundSize: _style.backgroundSize || "cover",
                backgroundPosition: _style.backgroundPosition || "initial",
            }
        }
        const cellStyles = StyleSheet.create({ cell: cell as any })
        return css(cellStyles.cell);
    }, [props.cell]);

    const attributes = useMemo(() => {
        const parentAttribute = {
            ...props.parentAttribute,
            cell: {
                general: props.cell.attributes.general,
                style: props.cell.attributes.style
            }
        }
        return parentAttribute;
    }, [props.parentAttribute, props.cell]);

    const renderedChildren = useMemo(() => {
        if (props.cell.rows?.length) {
            return props.cell.rows.map((row, index) => {
                return (
                    <div className={`${styles.childRowWrapper}`} key={row.id}>
                        <Row row={row} />
                    </div>
                )
            })
        } else {
            return props.cell.components.map((component, index) => {
                return (
                    <Component component={component} key={component.id || index} parentAttribute={attributes} />
                )
            })
        }

    }, [attributes, props.cell]); 

    if (!props.cell) {
        return null;
    }

    return (
        <div className={`col-md-${layout} ${style} ${general.customClass || ""}`} id={general.customId || ""}>
            {renderedChildren}
        </div>
    )
})

export default Cell;
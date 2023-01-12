import { css, StyleSheet } from "forging-react";
import React, { useMemo } from "react";
import { IPage, IRow } from "../../../model/page_builder";
import Row from "../Row";

type propType = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    page?: IPage
}

const Page = React.memo<propType>((props) => {
    
    const getRowStyles = (style: React.CSSProperties) => {
        let row: React.CSSProperties = {
            padding: style.padding || "0",
            margin: style.margin || "0",
            backgroundColor: style.backgroundColor || "transparent",
        }
        if (style.backgroundImage) {
            row = {
                ...row,
                backgroundRepeat:'no-repeat',
                backgroundImage: style.backgroundImage,
                backgroundSize: style.backgroundSize || "cover",
                backgroundPosition: style.backgroundPosition || "initial",
            }
        }
        const rowStyles = StyleSheet.create({ row: row as any })
        return rowStyles.row
    }

    const renderedRows = useMemo(() => {
        return props.page?.rows?.map((row: IRow, index: number) => {
            let general: IRow['attributes']['general'] = {}, style = "";

            if (!row) {
                return null;
            }

            if (row.attributes) {
                if (row.attributes.general) {
                    general = row.attributes.general;
                }

                if (row.attributes.style) {
                    style = css(getRowStyles(row.attributes.style));
                }
            }

            // if (!props.deviceType && general.isVisibleOnDesktop == false) {
            //     return null
            // }

            return (
                <section title={general.title || ""} key={row.id || index} className={`${style} ${general.customClass || ""}`} id={general.customId || ""}>
                    <div className={row.className || "d-flex flex-row"} >
                        <Row row={row} pageIndex={index} />
                    </div>
                </section>
            )
        })
    }, [props.page?.rows])

    if(!props.page) return null;

    return (
        <div className={props.className} style={props.style} id={props.id}>
            {renderedRows}
        </div>
    )
});

export default Page;
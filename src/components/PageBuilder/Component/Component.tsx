import React, { useMemo } from "react";
import { IAttributes, IComponent } from "../../../model/page_builder";
import * as ForgingReact from 'forging-react';
import styles from './component.module.css';

const ComponentList: { [key in string]: React.NamedExoticComponent } = ForgingReact as any;

type propType = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    component: IComponent;
    parentAttribute?: IAttributes;
}

const Component = React.memo<propType>(props => {

    const { component } = props;

    const Comp = useMemo(() => {
        const identifier = component.identifier || component.name;
        return ComponentList[identifier] || ComponentList[component.name] || ((props: any) => React.createElement(identifier, props));
    }, [component]);

    const attributes = useMemo(() => {
        try {
            if(component.attributes && typeof component.attributes == "string") {
                return JSON.parse(component.attributes)
            }
        } catch(e) {
            console.error(e);
            return {};
        }
        return component.attributes;

    }, [component])

    if (!Comp) {
        return null;
    }

    return (
        <div className={`${styles.container}`}>
            <Comp {...attributes} />
        </div>
    )
})

export default Component;
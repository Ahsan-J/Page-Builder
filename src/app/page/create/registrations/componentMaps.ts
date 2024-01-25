import { ColorSchemes, IDropdownItem, ObjectType, Size } from 'forging-react';
import React from 'react';

interface CommonComponentOptions {
    placeholder?: string;
    description?: string;
    validation?: ObjectType;
}

interface DropdownComponentOptions<O extends ObjectType = ObjectType> extends CommonComponentOptions {
    control: "Dropdown",
    defaultValue?: keyof O,
    options?: O,
}

interface AutocompleteComponentOptions extends CommonComponentOptions {
    control: "Autocomplete",
}

interface SwitchComponentOptions extends CommonComponentOptions {
    control: "Switch",
    defaultValue?: boolean,
}

interface InputComponentOptions extends CommonComponentOptions {
    control: "Input",
}

interface TextareaComponentOptions extends CommonComponentOptions {
    control: "Textarea",
}

interface FileComponentOptions extends CommonComponentOptions {
    control: "File",
    accept?: string,
}

interface ObjectComponentOptions extends CommonComponentOptions {
    control: "Object",
}

type ComponentOptions = DropdownComponentOptions
    | AutocompleteComponentOptions
    | SwitchComponentOptions
    | InputComponentOptions
    | FileComponentOptions
    | TextareaComponentOptions
    | ObjectComponentOptions;

type IComponentConfig<T extends React.ComponentType = React.ComponentType> = {
    component: T
    argsType?: { [key in T extends React.ComponentType<infer P> ? keyof P : string]?: ComponentOptions },
}

const componentMap = new Map<string, IComponentConfig>();

const defaultArgTypes: {[key in 'className' | 'style' | 'id']: ComponentOptions} = {
    "className": {
        control: "Textarea",
        placeholder: "Custom classes",
        description: ""
    },
    "style": {
        control: "Object",
    },
    "id": {
        control: "Input",
    },
}

export const registerComponentForInput = <T extends React.ComponentType = React.ComponentType>(key: string, component: T, argsType?: IComponentConfig<T>['argsType']) => {
    componentMap.set(key, {
        component,
        argsType: Object.assign({}, defaultArgTypes, argsType),
    })
}

export const getRegisteredComponentKeys = () => {
    return componentMap.keys();
}

export const getAllRegisteredComponent = () => {
    const result: {[key in string]?: IComponentConfig} = {};

    for(const [key, value] of componentMap.entries()) {
        result[key] = value;
    }

    return result;
}

export const getRegisteredComponent = (key: string) => {
    if(!componentMap.has(key)) return null;
    return componentMap.get(key);
}

export const ColorTypeArg: DropdownComponentOptions = {
    control: "Dropdown",
    get options() {
        return {
            "primary": { label: "Primary" },
            "link": { label: "Link" },
            "danger": { label: "Danger" },
            "dark": { label: "Dark" },
            "info": { label: "Info" },
            "light": { label: "Light" },
            "secondary": { label: "Secondary" },
            "success": { label: "Success" },
            "warning": { label: "Warn" },

        } as { [key in ColorSchemes]: IDropdownItem }
    },
    defaultValue: "primary"
}
export const SizeArgs: DropdownComponentOptions = {
    control: "Dropdown",
    get options() {
        return {
            "xs": { label: "Extra small" },
            "sm": { label: "Small" },
            "base": { label: "Normal" },
            "lg": { label: "Large" },
            "xl": { label: "Extra Large" },
            "2xl": { label: "Extra Large x2" },
            "3xl": { label: "Extra Large x3" },
            "4xl": { label: "Extra Large x4" },
            "5xl": { label: "Extra Large x5" },
            "6xl": { label: "Extra Large x6" },
            "7xl": { label: "Extra Large x7" },
            "8xl": { label: "Extra Large x8" },
            "9xl": { label: "Extra Large x9" },
        } as {[key in Size]: IDropdownItem}
    },
    defaultValue: "primary"
}

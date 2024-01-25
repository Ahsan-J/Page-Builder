import { Button, IDropdownItem, IconSets, ObjectType, Size } from "forging-react";
import { ColorTypeArg, SizeArgs, registerComponentForInput } from "./componentMaps";
import { ComponentProps } from "react";

registerComponentForInput("Button", Button, {
    "htmlType": {
        control: "Dropdown",
        description: "The HTML Button element type",
        get options() {
            return {
                "button": {
                    label: "Button",
                },
                "link": {
                    label: "Link",
                },
            } as { [key in NonNullable<ComponentProps<typeof Button>['htmlType']>]: IDropdownItem }
        },
        defaultValue: "button",
        placeholder: "HTML behavior of button"
    },
    "type": ColorTypeArg,
    "outline": {
        control: "Switch",
        defaultValue: false,
        description: "Make button as outline"
    },
    "leftIcon": {
        control: "Dropdown",
        get options() {
            return IconSets.reduce<ObjectType<IDropdownItem>>((result, key) => {
                if (!result[key]) result[key] = { label: key };
                return result;
            }, {});
        },
        placeholder: "Left Icon"
    },
    "rightIcon": {
        control: "Dropdown",
        get options() {
            return IconSets.reduce<ObjectType<IDropdownItem>>((result, key) => {
                if (!result[key]) result[key] = { label: key };
                return result;
            }, {});
        },
        placeholder: "Right Icon"
    },
    "onClick": {
        control: "Textarea",
        description: "A Pure function to be called when a user clicks the function.",
        placeholder: `console.log("Build my page");`
    },
    "rounded": {
        control: "Switch",
        defaultValue: true,
        description: "Make the button rounded",
    },
    "block": {
        control: "Switch",
        defaultValue: true,
        description: "Make the button rounded",
    },
    "size": SizeArgs,
});
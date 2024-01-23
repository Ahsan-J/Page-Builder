import type { ObjectType } from "forging-react";
import * as Components from "forging-react";

function getMappedValue<T extends keyof typeof Components>(key:T, props: (typeof Components)[T] extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> ? React.ComponentProps<(typeof Components)[T]>: (typeof Components)[T]) {
    return [key, props] as Iterable<readonly [string, ObjectType]>;
}

export const ComponentMap = new Map<string, ObjectType>(
    getMappedValue("Button", {  }),
);
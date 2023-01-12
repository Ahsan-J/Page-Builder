import { IUser } from "./user";

export interface IPage {
    id: string;
    name: string;
    onLoadScript?: string | null;
    style?: string | null;
    className?: string | null;
    meta: IPageMeta;
    openGraph: IOriginalGraph;
    password: string | null;
    status: number;
    rows: Array<IRow>;
    created_at: string;
    updated_at: null;
    deleted_at: string | null;
    created_by: IUser | null;
    modified_by: IUser | null;
}

export interface IOriginalGraph {
    title?: string | null;
    image?: string | null;
    description?: string | null;
}

export interface IPageMeta {
    robots?: string;
    keywords?: string | null;
    tags?: string | null;
}

export interface IRow {
    id: string;
    attributes: IAttributes;
    title?: string | null;
    className?: string;
    status?: number;
    layout: string;
    cells: Array<ICell>;
}

export interface IAttributes {
    general?: IGeneralAttributes | null;
    style?: {[key in string]: string | null} | null;
}

export interface IGeneralAttributes {
    customClass?: string | null;
    customId?: string | null;
    includeGutter?: boolean;
    isFluidLayout?: boolean;
    title?: string | null
}

export interface ICell {
    id: string;
    attributes: IAttributes;
    className?: string;
    status?: number;
    rows?: Array<IRow>;
    components: Array<IComponent>;
}

export interface IComponent {
    id: string;
    identifier: string | null;
    thumbnail: string | null;
    name: string;
    title: string;
    category: number | null;
    description: string | null;
    attributes: {[key: string]: string} | string;
}
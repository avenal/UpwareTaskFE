import { Tag } from "store/tags"

export interface Element {
    readonly id: number;
    readonly date_from: Date;
    readonly date_to: Date;
    readonly date_time: Date;
    readonly currency_name: string;
    readonly currency_value: number;
    readonly consent: boolean;
    readonly tag: Tag;
    readonly tags: Tag[];
}

export interface ElementListState {
    readonly elements: Element[];
    readonly isPending: boolean;
}


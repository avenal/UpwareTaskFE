export interface Tag {
    readonly id: number;
    readonly title: string;
}

export interface TagListState {
    readonly tags: Tag[];
    readonly isPending: boolean;
}

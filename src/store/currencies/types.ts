export interface Currency {
    readonly tag: string,
    readonly name: string,
}

export interface CurrencyListState {
    readonly currencies: Currency[];
    readonly isPending: boolean;
}

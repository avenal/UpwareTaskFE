import { Reducer } from 'redux';

import { Action } from 'store/actions';
import { CurrencyListState } from './types';
import {
    GET_CURRENCY_LIST,
} from './consts';

export const initialState: CurrencyListState = {
    currencies: [],
    isPending: false,
};

export const currencyList: Reducer<CurrencyListState, Action> = (
    state: CurrencyListState = initialState,
    { type, payload }: Action,
): CurrencyListState => {
    switch (type) {
        case GET_CURRENCY_LIST.start:
            return {
                ...state,
                isPending: true,
            };
        case GET_CURRENCY_LIST.success:
            return {
                isPending: false,
                currencies: payload,
            };
        case GET_CURRENCY_LIST.error:
            return {
                ...state,
                isPending: false,
            };
        default:
            return state;
    }
};

import { createAction, Action } from 'store/actions';
import {
    GET_CURRENCY_LIST
} from './consts';
import { Currency } from './types';

export const getCurrencyListStart = (): Action => createAction(GET_CURRENCY_LIST.start);
export const getCurrencyListSuccess = (res: Currency[]): Action => createAction(GET_CURRENCY_LIST.success, res);
export const getCurrencyListError = (): Action => createAction(GET_CURRENCY_LIST.error);

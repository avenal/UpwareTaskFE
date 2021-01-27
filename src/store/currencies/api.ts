import { Dispatch } from 'redux';

import { client } from 'shared/utils';
import { URLS } from 'shared/consts';
// import { alert, Variant } from 'store/alert';
import {
    getCurrencyListStart,
    getCurrencyListSuccess,
    getCurrencyListError,
} from './actions';

export const fetchCurrencyList = () => async (dispatch: Dispatch) => {
    dispatch(getCurrencyListStart());
    try {
        const { data } = await client.get(`${URLS.currencies}`);
        const payload = Object.entries(data).map((item: any) => { return { tag: item[0], name: item[1], display: `[${item[0]}] ${item[1]}`}});
        dispatch(getCurrencyListSuccess(payload));
    } catch (err) {
        dispatch(getCurrencyListError());
    }
};

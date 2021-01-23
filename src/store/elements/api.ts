import { Dispatch } from 'redux';

import { client } from 'shared/utils';
import { URLS } from 'shared/consts';
// import { alert, Variant } from 'store/alert';
import {
    getElementListStart,
    getElementListSuccess,
    getElementListError,
    updateElementStart,
    updateElementSuccess,
    updateElementError,
    deleteElementStart,
    deleteElementError,
    deleteElementSuccess,
    addElementStart,
    addElementSuccess,
    addElementError,
} from './actions';
import { Element } from './types';

export const fetchElementList = () => async (dispatch: Dispatch) => {
    dispatch(getElementListStart());

    try {
        const { data } = await client.get(`${URLS.api}${URLS.elements}?per-page=200`);
        dispatch(getElementListSuccess(data));
    } catch (err) {
        dispatch(getElementListError());
    }
};

export const updateElement = (element: Element) => async (dispatch: Dispatch<any>) => {
    dispatch(updateElementStart());
    const data = element;

    try {
        await client.put(`${URLS.api}${URLS.elements}/${element.id}`, data);
        dispatch(fetchElementList());
        dispatch(updateElementSuccess());
        // dispatch(alert(SUCCESS.updateBook, Variant.success));
    } catch (err) {
        // dispatch(alert(ERRORS.updateBook, Variant.error));
        dispatch(updateElementError());
    }
};

export const deleteElement = (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch(deleteElementStart());

    try {
        await client.delete(`${URLS.api}${URLS.elements}/${id}`);
        // dispatch(alert(SUCCESS.deleteBook, Variant.success));
        dispatch(deleteElementSuccess(id));
    } catch (err) {
        // dispatch(alert(ERRORS.deleteBook, Variant.error));
        dispatch(deleteElementError());
    }
};

export const addNewElement = (newElement: Record<string, any>) => async (dispatch: Dispatch<any>) => {
    dispatch(addElementStart());

    try {
        const { data } = await client.post(`${URLS.api}${URLS.elements}`, newElement);
        dispatch(addElementSuccess(data));
        // dispatch(alert(SUCCESS.addBook, Variant.success));
    } catch (err) {
        // dispatch(alert(ERRORS.addBook, Variant.error));
        dispatch(addElementError());
    }
};

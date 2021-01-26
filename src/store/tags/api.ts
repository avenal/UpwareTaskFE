import { Dispatch } from 'redux';

import { client } from 'shared/utils';
import { URLS } from 'shared/consts';
// import { alert, Variant } from 'store/alert';
import {
    getTagListStart,
    getTagListSuccess,
    getTagListError,
    updateTagStart,
    updateTagSuccess,
    updateTagError,
    deleteTagStart,
    deleteTagError,
    deleteTagSuccess,
    addTagStart,
    addTagSuccess,
    addTagError,
} from './actions';
import { Tag } from './types';

export const fetchTagList = () => async (dispatch: Dispatch) => {
    dispatch(getTagListStart());

    try {
        const { data } = await client.get(`${URLS.api}${URLS.tags}`);
        dispatch(getTagListSuccess(data));
    } catch (err) {
        dispatch(getTagListError());
    }
};

export const updateTag = (tag: Tag) => async (dispatch: Dispatch<any>) => {
    dispatch(updateTagStart());
    const data = tag;

    try {
        await client.put(`${URLS.api}${URLS.tags}/${tag.id}`, data);
        dispatch(fetchTagList());
        dispatch(updateTagSuccess());
        // dispatch(alert(SUCCESS.updateBook, Variant.success));
    } catch (err) {
        // dispatch(alert(ERRORS.updateBook, Variant.error));
        dispatch(updateTagError());
    }
};

export const deleteTag = (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch(deleteTagStart());

    try {
        await client.delete(`${URLS.api}${URLS.tags}/${id}`);
        // dispatch(alert(SUCCESS.deleteBook, Variant.success));
        dispatch(deleteTagSuccess(id));
    } catch (err) {
        // dispatch(alert(ERRORS.deleteBook, Variant.error));
        dispatch(deleteTagError());
    }
};

export const addNewTag = (newTag: Record<string, any>) => async (dispatch: Dispatch<any>) => {
    dispatch(addTagStart());

    try {
        const { data } = await client.post(`${URLS.api}${URLS.tags}`, newTag);
        dispatch(addTagSuccess(data));
        // dispatch(alert(SUCCESS.addBook, Variant.success));
    } catch (err) {
        // dispatch(alert(ERRORS.addBook, Variant.error));
        dispatch(addTagError());
    }
};

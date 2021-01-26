import { createAction, Action } from 'store/actions';
import {
    GET_TAG_LIST,
    DELETE_TAG,
    UPDATE_TAG,
    ADD_TAG,
} from './consts';
import { Tag } from './types';

export const getTagListStart = (): Action => createAction(GET_TAG_LIST.start);
export const getTagListSuccess = (res: Tag[]): Action => (
    createAction(
        GET_TAG_LIST.success,
        res,
    ));
export const getTagListError = (): Action => createAction(GET_TAG_LIST.error);
export const deleteTagStart = (): Action => createAction(DELETE_TAG.start);
export const deleteTagSuccess = (id: number): Action => createAction(DELETE_TAG.success, id);
export const deleteTagError = (): Action => createAction(DELETE_TAG.error);
export const updateTagStart = (): Action => createAction(UPDATE_TAG.start);
export const updateTagSuccess = (): Action => createAction(UPDATE_TAG.success);
export const updateTagError = (): Action => createAction(UPDATE_TAG.error);
export const addTagStart = (): Action => createAction(ADD_TAG.start);
export const addTagSuccess = (tag: Tag): Action => createAction(ADD_TAG.success, tag);
export const addTagError = (): Action => createAction(ADD_TAG.error);

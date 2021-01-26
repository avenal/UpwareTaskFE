import { Reducer } from 'redux';

import { Action } from 'store/actions';
import { TagListState } from './types';
import {
    GET_TAG_LIST,
    DELETE_TAG,
    UPDATE_TAG,
    ADD_TAG,
} from './consts';

export const initialState: TagListState = {
    tags: [],
    isPending: false,
};

export const tagList: Reducer<TagListState, Action> = (
    state: TagListState = initialState,
    { type, payload }: Action,
): TagListState => {
    switch (type) {
        case GET_TAG_LIST.start:
        case UPDATE_TAG.start:
        case DELETE_TAG.start:
        case ADD_TAG.start:
            return {
                ...state,
                isPending: true,
            };
        case GET_TAG_LIST.success:
            return {
                isPending: false,
                tags: payload,
            };
        case UPDATE_TAG.success:
            return {
                ...state,
                isPending: false,
            };
        case ADD_TAG.success:
            return {
                isPending: false,
                tags: [...state.tags, payload],
            };
        case UPDATE_TAG.error:
        case GET_TAG_LIST.error:
        case DELETE_TAG.error:
        case ADD_TAG.error:
            return {
                ...state,
                isPending: false,
            };
        case DELETE_TAG.success:
            return {
                tags: state.tags.filter(({ id }) => id !== payload),
                isPending: false,
            };
        default:
            return state;
    }
};

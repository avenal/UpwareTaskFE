import { Reducer } from 'redux';

import { Action } from 'store/actions';
import { ElementListState } from './types';
import {
    GET_ELEMENT_LIST,
    DELETE_ELEMENT,
    UPDATE_ELEMENT,
    ADD_ELEMENT,
} from './consts';

export const initialState: ElementListState = {
    elements: [],
    isPending: false,
};

export const elementList: Reducer<ElementListState, Action> = (
    state: ElementListState = initialState,
    { type, payload }: Action,
): ElementListState => {
    switch (type) {
        case GET_ELEMENT_LIST.start:
        case UPDATE_ELEMENT.start:
        case DELETE_ELEMENT.start:
        case ADD_ELEMENT.start:
            return {
                ...state,
                isPending: true,
            };
        case GET_ELEMENT_LIST.success:
            return {
                isPending: false,
                elements: payload,
            };
        case UPDATE_ELEMENT.success:
            return {
                ...state,
                isPending: false,
            };
        case ADD_ELEMENT.success:
            return {
                isPending: false,
                elements: [...state.elements, payload],
            };
        case UPDATE_ELEMENT.error:
        case GET_ELEMENT_LIST.error:
        case DELETE_ELEMENT.error:
        case ADD_ELEMENT.error:
            return {
                ...state,
                isPending: false,
            };
        case DELETE_ELEMENT.success:
            return {
                elements: state.elements.filter(({ id }) => id !== payload),
                isPending: false,
            };
        default:
            return state;
    }
};

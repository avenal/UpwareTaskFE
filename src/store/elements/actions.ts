import { createAction, Action } from 'store/actions';
import {
    GET_ELEMENT_LIST,
    DELETE_ELEMENT,
    UPDATE_ELEMENT,
    ADD_ELEMENT,
} from './consts';
import { Element } from './types';

export const getElementListStart = (): Action => createAction(GET_ELEMENT_LIST.start);
export const getElementListSuccess = (res: Element[]): Action => (
    createAction(
        GET_ELEMENT_LIST.success,
        res,
    ));
export const getElementListError = (): Action => createAction(GET_ELEMENT_LIST.error);
export const deleteElementStart = (): Action => createAction(DELETE_ELEMENT.start);
export const deleteElementSuccess = (id: number): Action => createAction(DELETE_ELEMENT.success, id);
export const deleteElementError = (): Action => createAction(DELETE_ELEMENT.error);
export const updateElementStart = (): Action => createAction(UPDATE_ELEMENT.start);
export const updateElementSuccess = (): Action => createAction(UPDATE_ELEMENT.success);
export const updateElementError = (): Action => createAction(UPDATE_ELEMENT.error);
export const addElementStart = (): Action => createAction(ADD_ELEMENT.start);
export const addElementSuccess = (element: Element): Action => createAction(ADD_ELEMENT.success, element);
export const addElementError = (): Action => createAction(ADD_ELEMENT.error);

import { createAction, Action } from 'store/actions';
import { Alert } from './types';
import { SET_ALERT, REMOVE_ALERT } from './consts';

export const setAlert = (res: Alert): Action => createAction(SET_ALERT, res);
export const removeAlert = (id: string): Action => createAction(REMOVE_ALERT, id);

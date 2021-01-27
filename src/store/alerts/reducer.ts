import { Reducer } from 'redux';

import { Action } from 'store/actions';
import { Alerts, Alert } from './types';
import { SET_ALERT, REMOVE_ALERT } from './consts';

export const initialState: Alerts = {
    alerts: [],
};

export const handleAlert: Reducer <Alerts, Action> = (
    state: Alerts = initialState,
    { type, payload }: Action,
): Alerts => {
    switch (type) {
        case SET_ALERT:
            return {
                alerts: [...state.alerts, payload],
            };
        case REMOVE_ALERT:
            return {
                alerts: state.alerts.filter(({ id }: Alert) => id !== payload),
            };
        default:
            return state;
    }
};
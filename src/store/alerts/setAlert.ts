import { v4 } from 'uuid';

import { Dispatch, AnyAction } from 'redux';
import { setAlert, removeAlert } from './actions';
import { Alert } from './types';
import { Variant } from './consts';

export const alert = (
    message: string,
    variant: Variant,
) => (dispatch: Dispatch<AnyAction>) => {
    const id = v4();
    const data: Alert = {
        message,
        variant,
        id,
        open: true,
    };
    dispatch(setAlert(data));
    setTimeout(() => dispatch(removeAlert(id)), 4000);
};

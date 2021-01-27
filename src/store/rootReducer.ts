import { combineReducers } from 'redux';
import { elementList, ElementListState } from './elements';
import { currencyList, CurrencyListState } from './currencies';
import { tagList, TagListState } from './tags';
import { handleAlert, Alerts } from './alerts'



export interface AppState {
    elementList: ElementListState;
    currencyList: CurrencyListState;
    tagList: TagListState;
    handleAlert: Alerts;
}

export const rootReducer = combineReducers<AppState>({
    elementList,
    currencyList,
    tagList,
    handleAlert
});

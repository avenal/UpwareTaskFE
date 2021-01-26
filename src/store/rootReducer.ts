import { combineReducers } from 'redux';
import { elementList, ElementListState } from './elements';
import { currencyList, CurrencyListState } from './currencies';
import { tagList, TagListState } from './tags';


// import { tagList, TagListState } from './tags';

export interface AppState {
    elementList: ElementListState;
    currencyList: CurrencyListState;
    tagList: TagListState;

    // tagList: TagListState;
}

export const rootReducer = combineReducers<AppState>({
    elementList,
    currencyList,
    tagList
    // tagList
});

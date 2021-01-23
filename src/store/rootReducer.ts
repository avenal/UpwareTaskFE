import { combineReducers } from 'redux';
import { elementList, ElementListState } from './elements';
// import { tagList, TagListState } from './tags';

export interface AppState {
    elementList: ElementListState;
    // tagList: TagListState;
}

export const rootReducer = combineReducers<AppState>({
    elementList,
    // tagList
});

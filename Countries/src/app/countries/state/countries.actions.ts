import { Action, createAction, props } from '@ngrx/store';
export enum  CountriesActionTypes {
    GET_EUROPE = '[Region] Europe Selected',
    GET_ASIA = '[Region] Asia Selected'
}
export const getRegions = createAction(
    '[Region] Regions Selected'
)
export const getEurope = createAction(
    '[Region] Europe Selected'
);

export const getAsia = createAction(
    '[Region] Asia Selected'
)


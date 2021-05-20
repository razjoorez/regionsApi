import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Country } from '../model/country';
import { RegionsComponent } from '../regions/regions.component';
import * as regionsAction from './regions.actions'
export interface RegionState {
    region1: string;
    region2: string;
    regionInit:string[];
    regionSelected: string;
    countries: Country[];
    countrySelected: Country;
}

const initialState: RegionState = {
    region1: 'Asia',
    region2: 'Europe',
    regionInit: ['Asia','Europe'],
    regionSelected: '',
    countries: [],
    countrySelected: null
}

const getRegionFeatureState = createFeatureSelector<RegionState>('regions');

export const getInitialRegions = createSelector(
    getRegionFeatureState,
    state => state.regionInit
)
export const getRegionSelected = createSelector(
    getRegionFeatureState,
    state => state.regionSelected
)

export const getCountries = createSelector(
    getRegionFeatureState,
    state => state.countries
)

export const getCountry = createSelector(
    getRegionFeatureState,
    state => state.countrySelected
)



export const regionReducer = createReducer<RegionState>(
    initialState,
    on(regionsAction.getRegions,(state): RegionState => {
        return {
            ...state
        }
    }),on(regionsAction.setRegion, (state, action): RegionState => {
        return {
            ...state, 
            regionSelected : action.regionSelected,
            countrySelected: null
        }
    }),on(regionsAction.setCountries, (state, action): RegionState => {
        return {
            ...state,
            countries: action.countries
        }
    }),on(regionsAction.selectCountry,(state, action): RegionState => {
        return {
            ...state,
            countrySelected: action.country
        }
    })

)
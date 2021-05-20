import { RegionState } from './region.reducer';
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
    regions: RegionState;
}
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap, switchMap } from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { concat } from 'rxjs';
import { CountriesService } from '../shared/countries.service';
import * as regionsActions from '../state/regions.actions'; 
@Injectable()
export class RegionsEffects {
    constructor(private actions$: Actions,
                private countriesService: CountriesService){}

        // loadCountries$ = createEffect(() => {
        //     return this.actions$
        //     .pipe(
        //         ofType(regionsActions.getEurope),
        //         concatMap(action => 
        //             this.countriesService.getEurope()
        //             .pipe(
        //                 map(countries => regionsActions.setCountries({countries}))
        //             )
        //             )
        //     )}
        // );

        loadAsia$ = createEffect(() => {
            return this.actions$
            .pipe(
                ofType(regionsActions.getAsia),switchMap(() => {
                    return this.countriesService.getAsia().pipe(
                        map(countries => regionsActions.setCountries({countries}))
                    )
                })
            )
        });

       
        loadEurope$ = createEffect(() => {
            return this.actions$
            .pipe(
                ofType(regionsActions.getEurope),switchMap(() => {
                    return this.countriesService.getEurope().pipe(
                        map(countries => regionsActions.setCountries({countries}))
                    )
                })
            )
        });



    }
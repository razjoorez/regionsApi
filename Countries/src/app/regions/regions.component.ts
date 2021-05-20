import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/app.state';
import { getCountries, getInitialRegions, getRegionSelected, RegionState } from '../state/region.reducer';
import *  as regionsActions from '../../app/state/regions.actions';
import { CountriesService } from '../shared/countries.service';
import { Country } from '../model/country';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
   initRegions$: Observable<any>;
   regSelected$: Observable<any>;
   countries$: Observable<Country[]>;
   countrySelected: boolean = false;
  constructor(private store: Store<State> ,
              private countryService: CountriesService,
              private router : Router) { }

  ngOnInit(): void {
   this.initRegions$ = this.store.select(getInitialRegions);
   this.regSelected$ = this.store.select(getRegionSelected);
   this.countries$ = this.store.select(getCountries);

  
  }

  selectReg(region: string) {
   
    this.store.dispatch(regionsActions.setRegion({regionSelected: region}));
    if(region ==='Europe')
    this.store.dispatch(regionsActions.getEurope());
    if(region==='Asia') this.store.dispatch(regionsActions.getAsia());
    //alert('g')
  }

  selectCountry(country: Country){
    this.store.dispatch(regionsActions.selectCountry({country: country}));
    this.countrySelected = true;
  }
  country() {
    // if(!this.countrySelected) alert('Please Select Region and Country...');
    // if(this.countrySelected)
    this.router.navigate(['country']);
  }
}

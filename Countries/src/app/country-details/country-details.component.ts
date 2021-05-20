import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../state/app.state';
import { getCountry } from '../state/region.reducer'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Country>;
  constructor(private store: Store<State>,
              private router: Router) { }
  
  ngOnInit(): void {
    this.country$ = this.store.select(getCountry)
  }

  home() {
    this.router.navigate(['']);
  }

}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from '../../theme/pipes/pipes.module';
import { CalendarModule } from 'angular-calendar';
import { DirectivesModule } from '../../theme/directives/directives.module';
import {RendezVousComponent} from "./rendez-vous.component";

export const routes = [
  { path: '', component: RendezVousComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule,
    CalendarModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RendezVousComponent
  ]
})
export class RendezVousModule { }

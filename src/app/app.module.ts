import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    StatisticsComponent,
    AffiliatesComponent,
    SidebarComponent,
    HeaderSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

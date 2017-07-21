import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';
 
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule],
  declarations: [AppComponent,
    DashboardComponent,
   HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

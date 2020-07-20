import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './includes/nav/nav.component';
import { HeaderComponent } from './includes/header/header.component';
import { HeroComponent } from './includes/hero/hero.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CategoriesComponent } from './includes/categories/categories.component';
import { SubcategoriesComponent } from './includes/subcategories/subcategories.component';
import { SubcategoriesFilterComponent } from './includes/subcategories-filter/subcategories-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    SubcategoriesFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

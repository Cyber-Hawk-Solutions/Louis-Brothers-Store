import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './includes/nav/nav.component';
import { HeaderComponent } from './includes/header/header.component';
import { HeroComponent } from './includes/hero/hero.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CategoriesSliderComponent } from './includes/categories/categories.component';
import { SubcategoriesSliderComponent } from './includes/subcategories/subcategories-slider.component';
import { SubcategoriesFilterComponent } from './includes/subcategories-filter/subcategories-filter.component';
import { SingleComponent } from './layouts/single/single.component';
import { SafePipe } from './pipes/safe.pipe';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SubcategoriesComponent } from './pages/subcategories/subcategories.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactBlockComponent } from './includes/contact/contact.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    CategoriesSliderComponent,
    SubcategoriesSliderComponent,
    SubcategoriesFilterComponent,
    SingleComponent,
    CategoriesComponent,
    SafePipe,
    SubcategoriesComponent,
    ContactBlockComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

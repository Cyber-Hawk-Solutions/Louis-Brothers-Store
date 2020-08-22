import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './layouts/single/single.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SubcategoriesComponent } from './pages/subcategories/subcategories.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'categories', component: SingleComponent, data: { nav: 'hero', title: 'Categories', subtitle: "We have everything under the sun." },
    children: [
      { path: '', component: CategoriesComponent },
    ],
  },
  {
    path: 'subcategories/:id', component: SingleComponent, data: { hideHeader: true },
    children: [
      { path: '', component: SubcategoriesComponent },
    ],
  },
  {
    path: 'contact', component: SingleComponent, data: { nav: 'hero', title: 'Contact', subtitle: "Get in Touch and Visit" },
    children: [
      { path: '', component: ContactComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './layouts/single/single.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SubcategoriesComponent } from './pages/subcategories/subcategories.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'categories', component: SingleComponent, data: { nav: 'hero', title: 'Categories', subtitle: "We have everything under the sun." },
    children: [
      { path: '', component: CategoriesComponent },
    ],
  },
  {
    path: 'subcategories', component: SingleComponent, data: { hideHeader: true },
    children: [
      { path: '', component: SubcategoriesComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component'
import { ProductsComponent } from './component/products/products.component';
// import { ItemComponent } from './component/item/item.component';
import { BrandComponent } from './component/brand/brand.component';
import { brandService } from './service/brand.service';
import { SortDiscountComponent } from './component/sort-discount/sort-discount.component';
import { SortPriceComponent } from './component/sort-price/sort-price.component';
import { SortRatingComponent } from './component/sort-rating/sort-rating.component';
const routes: Routes = [
  { path: "", redirectTo: 'products', pathMatch: 'full' },

  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  // { path: 'item', component: ItemComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'sort-rating', component: SortRatingComponent },
  { path: 'sort-price', component: SortPriceComponent },
  { path: 'sort-discount', component: SortDiscountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

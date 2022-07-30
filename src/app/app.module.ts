import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { SortPipe } from './shared/sort.pipe';
//import { ItemComponent } from './component / item / item.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OrderModule } from 'ngx-order-pipe';
import { BrandComponent } from './component/brand/brand.component';
import { SortPriceComponent } from './component/sort-price/sort-price.component';
import { SortRatingComponent } from './component/sort-rating/sort-rating.component';
import { SortDiscountComponent } from './component/sort-discount/sort-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    BrandComponent,
    SortPipe,
    SortPriceComponent,
    SortRatingComponent,
    SortDiscountComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ScrollViewModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    OrderModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

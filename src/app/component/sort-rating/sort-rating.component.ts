import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ItemService } from 'src/app/service/item.service';
import { brandService } from 'src/app/service/brand.service';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'
import Swal from 'sweetalert2';
import { filter, from } from 'rxjs';
@Component({
  selector: 'app-sort-rating',
  templateUrl: './sort-rating.component.html',
  styleUrls: ['./sort-rating.component.css']
})
export class SortRatingComponent implements OnInit {

  public productList: any;
  public filterCategory: any;


  searchKey: string = "";
  sortColumn: string = "";

  constructor(private api: ApiService, private cartService: CartService, private itemService: ItemService, private brandService: brandService) { }
  orderHeader: string = '';

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;

      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    this.itemService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    this.brandService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item)
  }
  addtobrand(item: any) {
    this.brandService.addtobrand(item)
  }
  addtoitem(item: any) {
    this.itemService.addtoItem(item)
  }
  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  sort(headerName: string) {
    this.orderHeader = headerName;
    this.sortColumn = "";
  }


  simpleAlert() {
    Swal.fire("hurry! only a few items left")
  }

}


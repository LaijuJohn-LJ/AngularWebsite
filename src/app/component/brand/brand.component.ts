import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ItemService } from 'src/app/service/item.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  public productList: any;
  public filterCategory: any;



  searchKey: string = "";

  constructor(private api: ApiService, private cartService: CartService, private itemService: ItemService) { }
  orderHeader: number = <any>[];

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.brand === "women's clothing" || a.brand === "men's clothing") {
          a.brand = "fashion"
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
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item)
  }
  addtoitem(item: any) {
    this.itemService.addtoItem(item)
  }
  filter(brand: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.brand == brand || brand == '') {
          return a;
        }
      })
  }
  sort(headerName: number) {
    this.orderHeader = headerName;
  }


  simpleAlert() {
    Swal.fire("hurry! only a few items left")
  }

}

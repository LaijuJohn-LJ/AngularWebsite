import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  itemService: any;
  constructor(private cartService: CartService, ItemService: ItemService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
    this.itemService.getProducts().subscribe((res: string | any[]) => {
      this.totalItem = res.length;
    })
  }

}

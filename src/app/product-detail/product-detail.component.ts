import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../data/products'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit { //TODO: 为什么implement
  product: Product | undefined

  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert("Your product have been added to the cart!")
  }

  ngOnInit() { //TODO: 什么时机运行这个方法
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id == productIdFromRoute);
  }
}

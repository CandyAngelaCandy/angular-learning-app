import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products} from '../../data/products'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit { //TODO: 为什么implement
  product: any

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id == productIdFromRoute);
  }
}
